var nrows,ncols;
		var tbl,cap,thead,tbody,code;
		//var tbl,cap,code;
		var rows,cols;
		window.onload = function()
		{
			bordercolor     = document.gen.bordercolor;
			bordercolorpick = document.gen.bordercolorpick;
			headbgcolor		= document.gen.headbgcolor;
			bodybgcolor		= document.gen.bodybgcolor;
			headbgcolorpick = document.gen.headbgcolorpick;
			bodybgcolorpick = document.gen.bodybgcolorpick;
			code			= document.gen.code;
			tbl				=  document.getElementById("demo");
			//cap				= document.getElementById("cap");
			cap				= document.getElementsByTagName("caption")[0];
			thead			= document.getElementsByTagName("thead")[0];
			tbody			= document.getElementsByTagName("tbody")[0];
			nrows			= document.gen.nrows;
			ncols			= document.gen.ncols;
			rows			= parseInt(nrows.value);
			cols			= parseInt(ncols.value);
			nrows.onchange = function() { UpdateRows(); }
			ncols.onchange = function() { UpdateCols(); }
			bordercolorpick.onchange = function() { bordercolor.value = bordercolorpick.value.toUpperCase(); UpdateCode(); }
			headbgcolorpick.onchange = function() { headbgcolor.value = headbgcolorpick.value.toUpperCase(); UpdateCode(); }
			bodybgcolorpick.onchange = function() { bodybgcolor.value = bodybgcolorpick.value.toUpperCase(); UpdateCode(); }
			tbl.onclick = function() { UpdateCode(); }
			tbl.onblur  = function() { UpdateCode(); }

			Cwidth			= document.gen.Cwidth;
			Cheight			= document.gen.Cheight;
			Cheadbgcolor	= document.gen.Cheadbgcolor;
			Cbodybgcolor	= document.gen.Cbodybgcolor;
			Cbordercolor	= document.gen.Cbordercolor;
			Cborderwidth	= document.gen.Cborderwidth;
			Cborderstyle	= document.gen.Cborderstyle;
			Ccollapse 		= document.gen.Ccollapse;
			Cborderspacing 	= document.gen.Cborderspacing;
			Ctextalign		= document.gen.Ctextalign;
			Cpadding		= document.gen.Cpadding;
			Ccaptionside	= document.gen.Ccaptionside;
			Ccaptionalign	= document.gen.Ccaptionalign;
			width			= document.gen.width;
			Dwidth			= document.gen.Dwidth;
			height			= document.gen.height;
			Dheight			= document.gen.Dheight;
			headbgcolor		= document.gen.headbgcolor;
			bodybgcolor		= document.gen.bodybgcolor;
			bordercolor		= document.gen.bordercolor;
			borderwidth		= document.gen.borderwidth;
			Dborderstyle	= document.gen.Dborderstyle;
			Dcollapse 		= document.gen.Dcollapse;
			borderspacing 	= document.gen.borderspacing;
			Dtextalign		= document.gen.Dtextalign;
			padding			= document.gen.padding;
			Dcaptionside	= document.gen.Dcaptionside;
			Dcaptionalign	= document.gen.Dcaptionalign;

			Cwidth.onchange = function() { UpdateCode(); }
			Cheight.onchange = function() { UpdateCode(); }
			Cheadbgcolor.onchange = function() { UpdateCode(); }
			Cbodybgcolor.onchange = function() { UpdateCode(); }
			Cbordercolor.onchange = function() { UpdateCode(); }
			Cborderwidth.onchange = function() { UpdateCode(); }
			Cborderstyle.onchange = function() { UpdateCode(); }
			Ccollapse.onchange = function() { UpdateCode(); }
			Cborderspacing.onchange = function() { UpdateCode(); }
			Ctextalign.onchange = function() { UpdateCode(); }
			Cpadding.onchange = function() { UpdateCode(); }
			Ccaptionside.onchange = function() { UpdateCode(); }
			Ccaptionalign.onchange = function() { UpdateCode(); }
			width.onchange = function() { UpdateCode(); }
			Dwidth.onchange = function() { UpdateCode(); }
			height.onchange = function() { UpdateCode(); }
			Dheight.onchange = function() { UpdateCode(); }
			headbgcolor.onchange = function() { UpdateCode(); }
			bodybgcolor.onchange = function() { UpdateCode(); }
			bordercolor.onchange = function() { UpdateCode(); }
			borderwidth.onchange = function() { UpdateCode(); }
			Dborderstyle.onchange = function() { UpdateCode(); }
			Dcollapse.onchange = function() { UpdateCode(); }
			borderspacing.onchange = function() { UpdateCode(); }
			Dtextalign.onchange = function() { UpdateCode(); }
			padding.onchange = function() { UpdateCode(); }
			Dcaptionside.onchange = function() { UpdateCode(); }
			Dcaptionalign.onchange = function() { UpdateCode(); }

			var browser = get_browser();
			if( browser=="Chrome" )
			{
				bordercolorpick.style.display = "inline";	
				headbgcolorpick.style.display = "inline";	
				bodybgcolorpick.style.display = "inline";	
			}
			
		    UpdateCode();
		}

		function UpdateRows()
		{
			drows = parseInt(nrows.value)-rows;
			if( drows==0 ) return;
			if( drows>0 )
			{
				for(k=0; k<drows; k++)
				{
					row = tbl.insertRow(-1);
					for(i=0; i<cols; i++)
					{
						cell = row.insertCell(i);
						cell.innerHTML = "&nbsp";
					}
				}
			}
			else
			{
				n=-drows;
				for(k=0; k<n; k++)
					tbl.deleteRow(rows-k);
			}
			rows = parseInt(nrows.value);
			UpdateCode();
		}

		function UpdateCols()
		{
			dcols = parseInt(ncols.value)-cols;
			if( dcols==0 ) return;
			if( dcols>0 )
			{
				for(i=0; i<=rows; i++)
				{
					row = tbl.rows[i];
					for(k=0; k<dcols; k++)
					{
						if( i==0 )
						{
							cell = document.createElement('th');
							row = tbl.tHead.children[0];
							row.appendChild(cell);
							n = cols+k+1;
							cell.innerHTML = "Header "+n;
						}
						else
						{
							cell = row.insertCell(-1);
							cell.innerHTML = "&nbsp";
						}
					}
				}
			}
			else
			{
				n=-dcols;
				for(i=0; i<=rows; i++)
				{
					row = tbl.rows[i];
					for(k=0; k<n; k++)
						row.deleteCell(cols-k-1);
				}
			}
			cols = parseInt(ncols.value);
			UpdateCode();
		}

		function UpdateStyle()
		{
			Cwidth			= document.gen.Cwidth.checked;
			Cheight			= document.gen.Cheight.checked;
			Cheadbgcolor	= document.gen.Cheadbgcolor.checked;
			Cbodybgcolor	= document.gen.Cbodybgcolor.checked;
			Cbordercolor	= document.gen.Cbordercolor.checked;
			Cborderwidth	= document.gen.Cborderwidth.checked;
			Cborderstyle	= document.gen.Cborderstyle.checked;
			Ccollapse 		= document.gen.Ccollapse.checked;
			Cborderspacing 	= document.gen.Cborderspacing.checked;
			Ctextalign		= document.gen.Ctextalign.checked;
			Cpadding		= document.gen.Cpadding.checked;
			Ccaptionside	= document.gen.Ccaptionside.checked;
			Ccaptionalign	= document.gen.Ccaptionalign.checked;
			width			= document.gen.width.value;
			Dwidth			= document.gen.Dwidth.value;
			height			= document.gen.height.value;
			Dheight			= document.gen.Dheight.value;
			headbgcolor		= document.gen.headbgcolor;
			bodybgcolor		= document.gen.bodybgcolor;
			bordercolor		= document.gen.bordercolor;
			borderwidth		= document.gen.borderwidth.value;
			Dborderstyle	= document.gen.Dborderstyle.value;
			Dcollapse 		= document.gen.Dcollapse.value;
			borderspacing 	= document.gen.borderspacing.value;
			Dtextalign		= document.gen.Dtextalign.value;
			padding			= document.gen.padding.value;
			Dcaptionside	= document.gen.Dcaptionside.value;
			Dcaptionalign	= document.gen.Dcaptionalign.value;
			
			var txt;
			var txt_tbl = "";
			var txt_cap = "";
			var txt_th = "";
			var txt_td = "";
			if( Cwidth )
			{
				txt_tbl+="\n\t\twidth:"+width+Dwidth+";";
				tbl.style.width = width+Dwidth;
			}
			else
				tbl.style.width = "";
			if( Cheight )
			{
				txt_tbl+="\n\t\theight:"+height+Dheight+";";
				tbl.style.height= height+Dheight;
			}
			else
				tbl.style.height= "";
			var s='';
			if( Cborderwidth )
				s+=" "+borderwidth+"px";
			if( Cborderstyle )
				s+=" "+Dborderstyle;
			if( Cbordercolor )
				s+=" "+bordercolor.value;
			if( s.length )
			{
				s = s.replace(" ","");
				txt_tbl+="\n\t\tborder:"+s+";";
				txt_th+="\n\t\tborder:"+s+";";
				txt_td+="\n\t\tborder:"+s+";";
				tbl.style.border = s;
			}
			if( Ccollapse )
			{
				txt_tbl+="\n\t\tborder-collapse:"+Dcollapse+";";
				tbl.style.borderCollapse = Dcollapse;
			}
			else
				tbl.style.borderCollapse = "";
			if( Cborderspacing )
			{
				txt_tbl+="\n\t\tborder-spacing:"+borderspacing+"px;";
				tbl.style.borderSpacing = borderspacing+"px";
			}
			else
				tbl.style.borderSpacing = "";
			if( Ctextalign )
			{
				txt_td+="\n\t\ttext-align:"+Dtextalign+";";
				tbl.style.textAlign = Dtextalign;
			}
			else
				tbl.style.textAlign = "";
			if( Cpadding )
			{
				txt_tbl+="\n\t\tpadding:"+padding+"px;";
				txt_th+="\n\t\tpadding:"+padding+"px;";
				txt_td+="\n\t\tpadding:"+padding+"px;";
				tbl.style.padding = padding+"px";
			}
			else
				tbl.style.padding = "";
			if( Ccaptionside )
			{
				txt_cap+="\n\t\tcaption-side:"+Dcaptionside+";";
				tbl.style.captionSide = Dcaptionside;
			}
			else
				tbl.style.captionSide = "";

			if( Ccaptionalign )
			{
				txt_cap+="\n\t\ttext-align:"+Dcaptionalign+";";
				cap.style.textAlign = Dcaptionalign;
			}
			else
				cap.style.textAlign = "";

			if( Cheadbgcolor )
				txt_th+="\n\t\tbackground:"+headbgcolor.value+";";
				
			if( Cbodybgcolor )
				txt_td+="\n\t\tbackground:"+bodybgcolor.value+";";
				
			cell = tbl.getElementsByTagName('th');
			for(var i=0; i<cell.length; i++)
			{
				if( Cheadbgcolor ) 	cell[i].style.backgroundColor = headbgcolor.value;
				if( Cpadding ) 		cell[i].style.padding = padding+"px";
				if( Cborderwidth )	cell[i].style.borderWidth = borderwidth+"px";
				if( Cborderstyle )	cell[i].style.borderStyle = Dborderstyle;
				if( Cbordercolor )	cell[i].style.borderColor = bordercolor.value;
			}
			
			cell = tbl.getElementsByTagName('td');
			for(var i=0; i<cell.length; i++)
			{
				if( Cbodybgcolor ) 	cell[i].style.backgroundColor = bodybgcolor.value;
				if( Cpadding ) 		cell[i].style.padding = padding+"px";
				if( Cborderwidth )	cell[i].style.borderWidth = borderwidth+"px";
				if( Cborderstyle )	cell[i].style.borderStyle = Dborderstyle;
				if( Cbordercolor )	cell[i].style.borderColor = bordercolor.value;
			}

			if( txt_tbl.length )
				txt_tbl = "\n\t.demo {"+txt_tbl+"\n\t}";
			if( txt_cap.length )
				txt_cap = "\n\t.demo caption {"+txt_cap+"\n\t}";
			if( txt_th.length )
				txt_th = "\n\t.demo th {"+txt_th+"\n\t}";
			if( txt_td.length )
				txt_td = "\n\t.demo td {"+txt_td+"\n\t}";

			txt = txt_tbl+txt_cap+txt_th+txt_td;
			if( txt.length )
				txt = "<style>"+txt+"\n</style>";
			
			return txt;
		}
		
		function UpdateCode()
		{
			var s = UpdateStyle();
			var txt = tbl.innerHTML;
			txt = ReduceTag("<caption",txt);
			txt = ReduceTag("<th",txt);
			txt = ReduceTag("<th",txt);
			txt = ReduceTag("<td",txt);
			txt = ReduceTag("<td",txt);
			txt = txt.replace(/\t/g,"");
			txt = txt.replace(/<\u002Fth><\u002Ftr>/g,"</th>\n</tr>");
			txt = txt.replace(/<\u002Ftd><\u002Ftr>/g,"</td>\n</tr>");
			txt = txt.replace(/<\u002Fth><th>/g,"</th>\n<th>");
			txt = txt.replace(/<\u002Ftd><td>/g,"</td>\n<td>");
			txt = txt.replace(/<\u002Ftr><tr>/g,"</tr>\n<tr>");
			txt = txt.replace(/<\u002Ftr><\u002Ftbody>/g,"</tr>\n<tbody>");
			txt = txt.replace(/<tr><td>/g,"<tr>\n<td>");
			txt = txt.replace(/<caption>/g,"\t<caption>");
			txt = txt.replace(/<thead/g,"\t<thead");
			txt = txt.replace(/<\u002Fthead>/g,"\t</thead>");
			txt = txt.replace(/<tbody/g,"\t<tbody");
			txt = txt.replace(/<\u002Ftbody>/g,"\t</tbody>");
			txt = txt.replace(/<tr>/g,"\t<tr>");
			txt = txt.replace(/<\u002Ftr>/g,"\t</tr>");
			txt = txt.replace(/<th>/g,"\t\t<th>");
			txt = txt.replace(/<td>/g,"\t\t<td>");
			txt = txt.replace(/\n\n/g,"\n");
			txt = txt.replace(/\n\n/g,"\n");

			txt = "<table class=\u0022demo\u0022>"+txt+"</table>";
			
			s += "\n"+txt;
			document.getElementById("code").value = s;
			
			//!!!TEMP
			//window.frames["iview"].document.body.innerHTML = "<html lang="en"><body>"+s+"</body></html>";
		}
		function ReduceTag(e,txt1)
		{
			var i1 = txt1.indexOf(e+" style=");
			if( i1>-1 )
			{
				var txt2 = txt1.substring(i1);
				var i2 = i1+txt2.indexOf(";\">");
				var str = txt1.substring(i1,i2+3);
				txt1 = txt1.split(str).join(e+">");
			}
			return txt1;
		}
		function OnSelectCode()
		{
			document.getElementById("code").select();
		}