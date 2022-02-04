<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0"
     indent="yes" doctype-system="about:legacy-compact" />
<xsl:template match="/"> 
<html> 
   <head> 
      <title>Biblioteka</title>
       <link rel="StyleSheet" href="biblioteka3.css"/>
   </head> 
   <body>
     <table id="tabela">
         <tr class="naglowek"><th>Biblioteka</th></tr>
         <tr>
         <td >
           <xsl:for-each select="biblioteka/dzial">
           <xsl:sort select="nazwadzialu"/>
           <table><xsl:attribute name="class">
                <xsl:choose>
                        <xsl:when test="position() mod 3 = 0">part1</xsl:when>
                        <xsl:when test="position() mod 3 = 1">part2</xsl:when>
                        <xsl:otherwise>part3</xsl:otherwise>
                </xsl:choose>
                </xsl:attribute>
             <tr class="dzial">
               <th colspan="5"><xsl:value-of select="nazwadzialu"/></th> 
             </tr>
             <tr class="dane"> 
                 <th>Numer</th>
                 <th>Nazwisko</th>
                 <th>Imie</th>
                 <th>Tytul?</th>
                 <th>Cena</th>
             </tr>
             <xsl:for-each select="ksiazka">
             <xsl:sort select="autor/nazwisko"/>
               <tr class="tlodane">             
                 <td class="numer"><xsl:value-of select="position()"/></td>
                 
                 <td class="nazwisko"><xsl:for-each select="autor"> 
                   <p><xsl:value-of select="nazwisko" /></p>
                 </xsl:for-each></td>
                 
                 <td class="imie"><xsl:for-each select="autor"> 
		                    <p><xsl:value-of select="imie"/></p>
                 </xsl:for-each></td>
                 
                 <td class="tytul"><xsl:value-of select="tytul"/></td>
               <td class="cena"><xsl:value-of select="cena" /></td>
              </tr>
             </xsl:for-each>
             
             </table>
         </xsl:for-each>
         </td>
         </tr>
     </table>
   </body> 
</html>  
</xsl:template>

</xsl:stylesheet>