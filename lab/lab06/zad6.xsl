<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:param name="sortby">brak</xsl:param>
<xsl:template match="/"> 
<html> 
   <head> 

	   <link rel="stylesheet" type="text/css" href="../zad6.css" media="screen"/>
	   <title>Biblioteka</title>
   </head> 
   <body>
	   <center>
	   <form name="form1">
		   <input type="submit" name="sort" value="autor" />
			   <input type="submit" name="sort" value="tytul" />
				   <input type="submit" name="" value="brak"/>
		   </form></center>
	<table id="tabela">
         <tr class="naglowek"><th>Biblioteka</th></tr>
         <tr>
<xsl:choose>
              
<xsl:when test="$sortby = 'autor'">
         <td>
           <xsl:for-each select="biblioteka/dzial">
           <xsl:sort select="nazwadzialu"/>
           <table><xsl:attribute name="class">
                <xsl:choose>
                        <xsl:when test="position() = 1">part1</xsl:when>
                        <xsl:when test="position() = 2">part2</xsl:when>
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
                 <th>Tytul</th>
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
         </xsl:when>

 <xsl:when test="$sortby = 'tytul'">
         <td>
           <xsl:for-each select="biblioteka/dzial">
           <xsl:sort select="nazwadzialu"/>
           <table><xsl:attribute name="class">
                <xsl:choose>
                        <xsl:when test="position() = 1">part1</xsl:when>
                        <xsl:when test="position() = 2">part2</xsl:when>
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
                 <th>Tytul</th>
                 <th>Cena</th>
             </tr>
             <xsl:for-each select="ksiazka">
             <xsl:sort select="tytul"/>
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
         </xsl:when>
     
         <xsl:otherwise>
<td>
           <xsl:for-each select="biblioteka/dzial">
           <xsl:sort select="nazwadzialu"/>
           <table><xsl:attribute name="class">
                <xsl:choose>
                        <xsl:when test="position() = 1">part1</xsl:when>
                        <xsl:when test="position() = 2">part2</xsl:when>
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
                 <th>Tytul</th>
                 <th>Cena</th>
             </tr>
             <xsl:for-each select="ksiazka">
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
         </xsl:otherwise>
        </xsl:choose>
      </tr>
     </table>
   </body> 
</html>  
</xsl:template>

</xsl:stylesheet>

