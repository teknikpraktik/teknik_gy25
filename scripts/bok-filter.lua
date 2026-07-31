-- Pandoc-filter för bokexporten (scripts/export-bok.mjs).
--
-- Två uppgifter, båda beroende av rå OpenXML och därför bara meningsfulla för
-- docx-målet:
--
-- 1. Sidbrytning. En tom Div med klassen "page-break" blir en riktig
--    sidbrytning i Word. Bokexporten sätter en sådan före varje kapitel samt
--    kring för- och eftertexterna.
--
-- 2. Innehållsförteckning. En tom Div med klassen "toc-field" blir ett riktigt
--    TOC-fält i Word, med nivå 1 och 2, alltså kapitel och avsnitt. Fältet
--    placeras där diven står, till skillnad från pandocs --toc som alltid
--    lägger förteckningen först i dokumentet. Fältet är tomt tills det
--    uppdateras i Word med Ctrl+A följt av F9.
--
-- Figurblocken (Div med custom-style="Figurblock") passerar orörda, eftersom
-- pandocs docx-skrivare hanterar custom-style själv. Se motsvarande resonemang
-- i review-filter.lua.

local function raw(xml)
  return pandoc.RawBlock('openxml', xml)
end

function Div(el)
  if not FORMAT:match('docx') then return nil end

  if el.classes:includes('page-break') then
    return raw('<w:p><w:r><w:br w:type="page"/></w:r></w:p>')
  end

  if el.classes:includes('toc-field') then
    return raw(table.concat({
      '<w:p><w:r><w:fldChar w:fldCharType="begin" w:dirty="true"/></w:r>',
      '<w:r><w:instrText xml:space="preserve"> TOC \\o "1-2" \\h \\z \\u </w:instrText></w:r>',
      '<w:r><w:fldChar w:fldCharType="separate"/></w:r>',
      '<w:r><w:t xml:space="preserve">Uppdatera innehållsförteckningen i Word med Ctrl+A och därefter F9.</w:t></w:r>',
      '<w:r><w:fldChar w:fldCharType="end"/></w:r></w:p>',
    }))
  end

  return nil
end
