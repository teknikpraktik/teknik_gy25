-- Pandoc-filter för den redaktionella granskningsexporten
-- (scripts/export-review.mjs). Två uppgifter:
--
-- 1. Sidbrytningsmarkörer: en tom Div med klassen "page-break" (en per
--    avsnitt, insatt av manuskärnan) blir en riktig sidbrytning i Word.
--    I HTML behålls diven och print-CSS:en ger break-before: page.
--
-- 2. Figurblock: Diven bär både klassen "figurblock" (stylas av HTML-CSS:en)
--    och custom-style="Figurblock" (styckestil i review-reference.docx), så
--    ingen transformation behövs här — filtret låter den passera orörd.
--    Att raden finns kvar som kommentar är avsiktligt: det dokumenterar var
--    figurblocken hanteras om formatet någon gång behöver ändras.

function Div(el)
  if el.classes:includes('page-break') then
    if FORMAT:match('docx') then
      return pandoc.RawBlock('openxml', '<w:p><w:r><w:br w:type="page"/></w:r></w:p>')
    end
    return el
  end
end
