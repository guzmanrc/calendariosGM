tiempo = new Array();
tiempo[ 0]="11^8^3114^AC^0^0^0^0^0^0^4^20^8^18";
tiempo[ 1]="11^8^2614^AC^182621^1^5^7^5^1^1^1^4^6";
tiempo[ 2]="11^8^2114^AC^365242^2^10^14^10^2^11^2^5^12";
tiempo[ 3]="11^8^1614^AC^547863^3^16^1^15^3^8^3^6^18";
tiempo[ 4]="11^8^1114^AC^730485^5^1^9^2^5^6^5^3^6";
tiempo[ 5]="11^8^614^AC^913106^6^6^16^7^6^3^6^4^12";
tiempo[ 6]="11^8^114^AC^1095727^7^12^3^12^7^13^7^5^18";
tiempo[ 7]="11^8^114^DC^1178637^8^3^13^17^17^9^17^15^2";
tiempo[ 8]="11^8^614^DC^1361258^9^9^1^4^18^6^18^16^8";
tiempo[ 9]="11^8^1114^DC^1543879^10^14^8^9^19^3^19^17^14";
tiempo[10]="11^8^1614^DC^1726501^11^19^15^15^1^1^1^14^2";
tiempo[11]="11^8^2114^DC^1909122^13^5^3^2^2^11^2^15^8";
tiempo[12]="11^8^2614^DC^2091743^14^10^10^7^3^8^3^16^14";
tiempo[13]="11^8^3114^DC^2274364^15^15^17^12^4^5^4^12^2";

tzolkin = new Array();
tzolkin[ 1]="Imox";
tzolkin[ 2]="Iq'";
tzolkin[ 3]="Aq'bal";
tzolkin[ 4]="K'at";
tzolkin[ 5]="Kan";
tzolkin[ 6]="Keme";
tzolkin[ 7]="Kej";
tzolkin[ 8]="Q'anil";
tzolkin[ 9]="Toj";
tzolkin[10]="Tz'i'";
tzolkin[11]="B'atz'";
tzolkin[12]="Eb";
tzolkin[13]="Aj";
tzolkin[14]="Ix";
tzolkin[15]="Tz'ikin";
tzolkin[16]="Ajmaq";
tzolkin[17]="No'j";
tzolkin[18]="Tijax";
tzolkin[19]="Kawoq";
tzolkin[20]="Ajpu";

haab = new Array()
haab[1]="Pop";
haab[2]="Wo";
haab[3]="Sip";
haab[4]="Sotz'";
haab[5]="Tzek";
haab[6]="Xul";
haab[7]="Yaxk'in";
haab[8]="Mol";
haab[9]="Ch'en";
haab[10]="Yax";
haab[11]="Sak";
haab[12]="Chej";
haab[13]="Mak";
haab[14]="K'ank'in";
haab[15]="Muwan";
haab[16]="Pax";
haab[17]="K'ayab'";
haab[18]="Kumk'u";
haab[19]="Wayeb'";

monthNames = new Array()
monthNames[1] = "Enero"
monthNames[2] = "Febrero"
monthNames[3] = "Marzo"
monthNames[4] = "Abril"
monthNames[5] = "Mayo"
monthNames[6] = "Junio"
monthNames[7] = "Julio"
monthNames[8] = "Agosto"
monthNames[9] = "Septiembre"
monthNames[10] = "Octubre"
monthNames[11] = "Noviembre"
monthNames[12] = "Diciembre"

dayNames = new Array()
dayNames[1] = "Domingo"
dayNames[2] = "Lunes"
dayNames[3] = "Martes"
dayNames[4] = "Miercoles"
dayNames[5] = "Jueves"
dayNames[6] = "Viernes"
dayNames[7] = "Sabado"

function customDateString(oneDate)
{
	var theDay   = dayNames[oneDate.getDay() + 1];
	var theMonth = monthNames[oneDate.getMonth() + 1];
	var theYear  = oneDate.getFullYear();
	theYear += (theYear < 100) ? 1900 : 0
	return theDay + " " + oneDate.getDate() +" de "+ theMonth + ", " + theYear;
}

function getFirstDay(theYear, theMonth){
	var firstDate = new Date(theYear,theMonth,1);
	return firstDate.getDay();
}

function getMonthLen(theYear, theMonth)
{
	var oneDay = 1000 * 60 * 60 * 24;
	var thisMonth = new Date(theYear, theMonth, 1);
	var nextMonth = new Date(theYear, theMonth + 1, 1);
	var len = Math.ceil((nextMonth.getTime() - thisMonth.getTime())/oneDay);
	return len;
}

function isbis(a)
{
   var p=Math.ceil(a/4)-(a/4);
   var esbis=1;
   if(p==0)
   {
     esbis=0;
     var ta=a;
     var tae=Math.floor(ta/100);
     var tad=(ta/100)-tae;
     var m41,m42,m43;
     if(tad==0)
     {
        m41=Math.floor(tae/4);
        m42=(tae/4);
        m43=m41-m42;
        if(m43!=0) esbis=1 // es bisiesto
     }
   }
   return esbis;
}

function senoche()
{
 var tsn = document.getElementById('w').value*20;
 tsn +=document.getElementById('k').value*1;

 var c1=(Math.floor(tsn/100)*1)
 tsn=tsn-(Math.floor(tsn/100)*100);
 var c2=(Math.floor(tsn/10)*1);
 tsn=tsn-(Math.floor(tsn/10)*10);
 var c3=tsn*1;
 tsn=(-1*((-1*c1)+(-1*c2)+(-1*c3)));
 if(tsn>9)
 {
  c1=(Math.floor(tsn/100)*1)
  tsn=tsn-(Math.floor(tsn/100)*100);
  c2=(Math.floor(tsn/10)*1);
  tsn=tsn-(Math.floor(tsn/10)*10);
  c3=tsn*1;
  tsn=(-1*((-1*c1)+(-1*c2)+(-1*c3)));
 }
 if(tsn==0){ 
   document.getElementById('sn').innerHTML="G9";
   document.getElementById('isn').innerHTML  = "<img src='media/calendario/g9.gif' title='se–or G9' style='width:110px;height:80px'>";
 }else{ 
   document.getElementById('sn').innerHTML="G"+tsn;
   document.getElementById('isn').innerHTML="<img src='media/calendario/g"+tsn+".gif' title='se–or g"+tsn+"' style='width:110px;height:80px'>";
 }
}

function caltzolhaab(tzo1,tzo2,ha1,ha2,dinicio,tdias)
{
 var tzol  =   	 4;
 var itzol =    20;
 var ha    =     8;
 var iha   =	18;
 var way   =     0;
 var cargador = "";

 if(tzo1!=100)
 {
   tzol  =  tzo1;
   itzol =  tzo2;
   ha    =   ha1;
   iha   =	 ha2;
 }

 for(var kin=dinicio;kin<tdias;kin++)
 {
   if(tzol++==13) tzol=1;

   if(iha==19)
   {
      if(way++==4)
      { 
         ha=-1; 
         iha=1;
         way=0;
      }
   }

   if(itzol++==20) itzol=1;

   if(ha++==19)
   {
      ha=0;
      if(iha++==19) iha=1;
   }

   if(ha==0&&iha==1){ cargador=tzol+"<br>"+tzolkin[itzol]; }
 }
 if(cargador!="") document.getElementById('ca').innerHTML=cargador;

 document.getElementById('tz').innerHTML = tzol+"<br>"+tzolkin[itzol];
 document.getElementById('ab').innerHTML = ha +"<br>"+haab[iha];

 document.getElementById('nitzol').innerHTML = "<img src='media/calendario/n"+tzol+".gif' title='numero "+tzol+"' height='80' >";
 document.getElementById('itzol').innerHTML  = "<img src='media/calendario/"+itzol+".gif' title=\"dia "+tzolkin[itzol]+"\" width=80 height=80>";
 document.getElementById('nihaab').innerHTML = "<img src='media/calendario/n"+ha+".gif' title='numero "+ha+"' height='80'>";
 document.getElementById('ihaab').innerHTML  = "<img src='media/calendario/"+iha+"m.gif' title=\"mes "+haab[iha]+"\" width=80 height=80>";
}

function acuentalarga()
{
 var tdias =     0; 
 var a     =  3114; 
 var m     =     8; 
 var d     =    11; 
 var ec    =  "AC"; 
 var entrar=     1;
 var tzol  =   	 4;
 var itzol =    20;
 var ha    =     8;
 var iha   =	18;

 var af = document.getElementById('anyo').value;
 var mf = document.getElementById('mes').value;
 var df = document.getElementById('diahoy').value;
 var ef = document.getElementById('era').value;
 ef=ef.toUpperCase();

 if(ef=="AC"||ef=="DC")
 { 
   entrar=0;
 }else alert("debe escojer una era correcta")

 var coeficiente;
 var dinicio=0,tzo1=100,tzo2=100,ha1=100,ha2=100;

 for(var coe=0;coe<13;coe++)
 { 
    coeficiente=tiempo[coe].split('^');
    if(ef=="AC"&&coeficiente[3]=="AC")
    {
      if((af*1)<(coeficiente[2]*1))
      {
        a  = coeficiente[2];
        ec = coeficiente[3];
        dinicio = coeficiente[4];
        tzo1 = coeficiente[10];
        tzo2 = coeficiente[11];
        ha1  = coeficiente[12];
        ha2  = coeficiente[13];
      }
    }
    if(ef=="DC"&&coeficiente[3]=="DC")
    {
      if((af*1)>(coeficiente[2]*1))
      {
        a  = coeficiente[2];
        ec = coeficiente[3];
        dinicio = coeficiente[4];
        tzo1 = coeficiente[10];
        tzo2 = coeficiente[11];
        ha1  = coeficiente[12];
        ha2  = coeficiente[13];
      }
    }
 }

tdias = dinicio;

if(entrar==0)
{
 var fin=0;
 while(fin==0)
 {
   if(a==af&&m==mf&&d==df&&ec==ef) fin=1;
   else tdias++;

   switch(m)
   {
      case 1:
         if(d==31){d=1; m++;}
         else d=d+1
      break;
      case 2:
         if(ec=="AC")
         {
            if(isbis(a-1)==0) 
            {
               if(d==29){d=1; m++;} 
               else d=d+1
            }
            else if(d==28){d=1; m++;} 
                 else d=d+1
         }
         if(ec=="DC")
         {
            if(isbis(a)==0) 
            {
               if(d==29){d=1; m++; } 
               else d=d+1
            }
            else if(d==28){d=1; m++;} 
                 else d=d+1
         }
      break;
      case 3:
         if(d==31){d=1; m++;}
         else d=d+1
      break;
      case 4:
         if(d==30){d=1; m++;}
         else d=d+1
      break;
      case 5:
         if(d==31){d=1; m++;}
         else d=d+1
      break;
      case 6:
         if(d==30){d=1; m++;}
         else d=d+1
      break;
      case 7:
         if(d==31){d=1; m++;}
         else d=d+1
      break;
      case 8:
         if(d==31){d=1; m++;}
         else d=d+1
      break;
      case 9:
         if(d==30){d=1; m++;}
         else d=d+1
      break;
      case 10:
         if(d==31){d=1; m++;}
         else d=d+1
      break;
      case 11:
         if(d==30){d=1; m++;}
         else d=d+1
      break;
      case 12:
         if(d==31)
         {
          d=1;
          m=1; 
          if(ec=="AC")
          {
             if(a==1)
             { 
                ec="DC";
                a=0;
             }
             else a--; 
          }
          if(ec=="DC") a++;

         }
         else d=d+1
      break;
   }
 }
}

caltzolhaab(tzo1,tzo2,ha1,ha2,dinicio,tdias);

document.getElementById('bkt').value=Math.floor(tdias/144000);
document.getElementById('nbktgif').innerHTML= "<img src='media/calendario/n"+Math.floor(tdias/144000)+".gif' title='numero "+Math.floor(tdias/144000)+"' height='80'>";
document.getElementById('bktgif').innerHTML = "<img src='media/calendario/baktun.gif' title=\"B'ak'tun\" width='80' height='80'>";
tdias=tdias-document.getElementById('bkt').value*144000;
document.getElementById('kt').value=Math.floor(tdias/7200);
document.getElementById('nktgif').innerHTML = "<img src='media/calendario/n"+Math.floor(tdias/7200)+".gif' title='numero "+Math.floor(tdias/7200)+"' height='80'>";
document.getElementById('ktgif').innerHTML  = "<img src='media/calendario/katun.gif' title=\"K'atun\" width='80' height='80'>";
tdias=tdias-document.getElementById('kt').value*7200;
document.getElementById('t').value=Math.floor(tdias/360);
document.getElementById('ntgif').innerHTML = "<img src='media/calendario/n"+Math.floor(tdias/360)+".gif' title='numero "+Math.floor(tdias/360)+"' height='80'>";
document.getElementById('tgif').innerHTML  = "<img src='media/calendario/tun.gif' title=\"Tun\">";
tdias=tdias-document.getElementById('t').value*360
document.getElementById('w').value=Math.floor(tdias/20);
document.getElementById('nwgif').innerHTML = "<img src='media/calendario/n"+Math.floor(tdias/20)+".gif' title='numero "+Math.floor(tdias/20)+"' height='80'>";
document.getElementById('wgif').innerHTML  = "<img src='media/calendario/winal.gif' title=\"Winal\">";
tdias=tdias-document.getElementById('w').value*20;
document.getElementById('k').value=tdias;
document.getElementById('nkgif').innerHTML = "<img src='media/calendario/n"+tdias+".gif' title='numero "+tdias+"' height='80'>";
document.getElementById('kgif').innerHTML  = "<img src='media/calendario/kin.gif' title=\"K'in\">";
document.getElementById('era').value=ec;

senoche();
llenardias();
lunadias();
}

var mesalunar = new Array(); // serie lunar por a–o
var eluna=0; // edad de la luna

function pascua(){

    mesalunar[1] = 31

    if(isbis(document.getElementById('anyo').value)) mesalunar[2] = 28 // febrero 28 - 29 dias
    else mesalunar[2] = 29 // febrero 28 - 29 dias

    mesalunar[3] = 31
    mesalunar[4] = 30
    mesalunar[5] = 31
    mesalunar[6] = 30
    mesalunar[7] = 31
    mesalunar[8] = 31
    mesalunar[9] = 30
    mesalunar[10] = 31
    mesalunar[11] = 30
    mesalunar[12] = 31

  var anyo = document.getElementById('anyo').value;
  var y = Math.floor(1*anyo);
  if (y >= 100){

    var a = y % 19;

    var gb  = Math.floor(y/100);
    var gc  = y % 100;
    var gd  = Math.floor(gb/4);
    var ge  = gb % 4;
    var gf  = Math.floor((gb + 8)/25);
    var gg  = Math.floor((gb - gf + 1)/3);
    var gh  = (19*a + gb - gd - gg + 15) % 30;
    var ghlp = gh;
    if(gh>28) ghlp=28;

    var gi  = Math.floor(gc/4);
    var gk  = gc % 4;
    var gl  = (32 + 2*ge + 2*gi - gh - gk) % 7;
    var gm  = Math.floor((a + 11*gh + 22*gl)/451);
    var gr1 = 22 + gh + gl - 7*gm;
	var gr2 = ((gr1 > 31) ? (gr1-31) + " Abril " : gr1 + " Marzo ") + y;

    var lpascual; // luna llena pascual
    lpascual= ghlp +21;

    var nmes=3;
    var mespascual="marzo";

    if(lpascual>31){
       lpascual = lpascual - 31;
       mespascual="abril"; // mespascual
       nmes=4;
       mesalunar[4] = lpascual;
    }else mesalunar[3] = lpascual;

    var llla1=lpascual; // antes de la luna pascual
    var llla2=lpascual; // despues de la luna pascual

    if(nmes==3){

       llla1=llla1-30;
       if(llla1<1) llla1=29+llla1;
       else if(llla1>29) llla1=llla1-29;
       if(mesalunar[2]==28) mesalunar[2] = llla1+1;
       else mesalunar[2] = llla1;

       llla1=llla1-28;
       if(llla1<1) llla1=29+llla1;
       else if(llla1>29) llla1=llla1-29;
       mesalunar[1] = llla1;

       llla2=llla2+28;
       if(llla2>29) llla2=llla2-29;
       mesalunar[4] = llla2;

       llla2=llla2+28;
       if(llla2>29) llla2=llla2-29;
       mesalunar[5] = llla2;

       llla2=llla2+28;
       if(llla2>29) llla2=llla2-29;
       mesalunar[6] = llla2;

       llla2=llla2+28;
       if(llla2>29) llla2=llla2-29;
       mesalunar[7] = llla2;

       llla2=llla2+28;
       if(llla2>29) llla2=llla2-29;
       mesalunar[8] = llla2;

       llla2=llla2+27;
       if(llla2>29) llla2=llla2-29;
       mesalunar[9] = llla2;

       llla2=llla2+29;
       if(llla2>29) llla2=llla2-29;
       mesalunar[10] = llla2;

       llla2=llla2+27;
       if(llla2>29) llla2=llla2-29;
       mesalunar[11] = llla2;

       llla2=llla2+29;
       if(llla2>29) llla2=llla2-29;
       mesalunar[12] = llla2;
    }

    if(nmes==4){
    
       llla1=llla1-28;
       if(llla1<1) llla1=30+llla1;
       else if(llla1>29) llla1=llla1-29;
       mesalunar[3] = llla1;

       llla1=llla1-30;
       if(llla1<1) llla1=29+llla1;
       else if(llla1>29) llla1=llla1-29;
       if(mesalunar[2]==28) mesalunar[2] = llla1+1;
       else mesalunar[2] = llla1;

       llla1=llla1-28;
       if(llla1<1) llla1=29+llla1;
       else if(llla1>29) llla1=llla1-29;
       mesalunar[1] = llla1;


       llla2=llla2+28;
       if(llla2>29) llla2=llla2-29;
       mesalunar[5] = llla2;

       llla2=llla2+28;
       if(llla2>29) llla2=llla2-29;
       mesalunar[6] = llla2;

       llla2=llla2+28;
       if(llla2>29) llla2=llla2-29;
       mesalunar[7] = llla2;

       llla2=llla2+28;
       if(llla2>29) llla2=llla2-29;
       mesalunar[8] = llla2;

       llla2=llla2+27;
       if(llla2>29) llla2=llla2-29;
       mesalunar[9] = llla2;

       llla2=llla2+29;
       if(llla2>29) llla2=llla2-29;
       mesalunar[10] = llla2;

       llla2=llla2+27;
       if(llla2>29) llla2=llla2-29;
       mesalunar[11] = llla2;

       llla2=llla2+29;
       if(llla2>29) llla2=llla2-29;
       mesalunar[12] = llla2;
    }
    //document.getElementById('dpascua').innerHTML = "* L.LL.P. "+ lpascual + " " + mespascual+" D.P. "+gr2;
  }
}

function lunallenardias(){
	var theMonth = (document.getElementById('mes').value - 1);
	var theYear  = document.getElementById('anyo').value;
	var firstDay = getFirstDay(theYear, theMonth)+1;
	var howMany  = getMonthLen(theYear, theMonth);

    document.getElementById('lunaoneMonth').innerHTML = monthNames[theMonth+1] + " " + theYear + " " + document.getElementById('era').value;
	document.getElementById('lunaestela').innerHTML = "";
    //pascua();
    eluna=15;
    for(var ifl=mesalunar[document.getElementById('mes').value];ifl>1;ifl--){
       eluna--;
       if(eluna==0) eluna=29;
    }
	var lunastabla = 0;
	var verlunast = 0;
	for (var i = 1; i < 42; i++){
		if (i < firstDay || i >= (howMany + firstDay)){ 
           document.getElementById('lunaoneDay'+i).innerHTML = " ";
        }else{
			if( (i - firstDay +1) == document.getElementById('diahoy').value ){
				document.getElementById('lunaoneDay'+i).innerHTML = "<font color=#FFFFFF><b>" + (i - firstDay + 1) + "</b></font><br>";
				document.getElementById('lunaoneDay'+i).innerHTML += "<img style='border:1px solid #ffffff;' src='media/calendario/moon" + eluna++ + ".gif'>";
			}else{
				document.getElementById('lunaoneDay'+i).innerHTML = "<font color=#FFFFFF>" + (i - firstDay + 1) + "</font><br>";
				document.getElementById('lunaoneDay'+i).innerHTML += "<img src='media/calendario/moon" + eluna++ + ".gif'>";
			}
			if( ((i - firstDay +1) >= document.getElementById('diahoy').value) && lunastabla++ < 8){
				document.getElementById('lunaestela').innerHTML += "<br>"+(i - firstDay +1)+"<img src='media/calendario/moon" + (eluna-1) + ".gif'>";
			}

			//if(eluna==16) document.getElementById('lunaoneDay'+i).innerHTML += "<font color=#FFFFFF>Luna llena</font><br>";
			if(eluna>29) eluna=1;
        }
	}
}

function lunadias(){
  document.getElementById('lunaddias').innerHTML = " ";
  var oneField = "<font id='lunaoneDay'>&nbsp</font>";
  var content = "<TABLE style='width:100%;background-color:#000000;'>";
  content += "<tr style='color:#ffffff'><th COLSPAN=7><font id='lunaoneMonth'></font></th></tr>";
  content += "<tr style='color:#ffffff'><th>Dom</th><th>Lun</th><th>Mar</th><th>Mie</th><th>Jue</th><th>Vie</th><th>Sab</th></tr>";
  content += "<tr>";
  for (var i = 1; i < 42; i++){
  	content += "<td id='lunafecha"+i+"' style='background-color:#000000;text-align:center;'><span id='lunaoneDay"+i+"'>&nbsp</span></td>";
  	if (i % 7 == 0){
       content += "</tr><tr>";
  	}
  }
  content += "</TABLE>";
  document.getElementById('lunaddias').innerHTML = content;
  lunallenardias();
}

function llenardias(){
	var theMonth = (document.getElementById('mes').value - 1);
	var theYear  = document.getElementById('anyo').value;
	var firstDay = getFirstDay(theYear, theMonth)+1;
	var howMany  = getMonthLen(theYear, theMonth);

    document.getElementById('oneMonth').innerHTML = monthNames[theMonth+1] + " " + theYear + " " + document.getElementById('era').value;

	for (var i = 1; i < 42; i++){
		if (i < firstDay || i >= (howMany + firstDay)){ 
            document.getElementById('oneDay'+i).innerHTML = "";
        }else{ 
           if( (i - firstDay +1) == document.getElementById('diahoy').value ){
              document.getElementById('oneDay'+i).innerHTML="<b><font color=WHITE>" + (i - firstDay + 1) + "</font></b>";
           }else{ 
              document.getElementById('oneDay'+i).innerHTML = i - firstDay + 1;
           }
        }
	}
}

function dias(){
  document.getElementById('ddias').innerHTML = "<table style='width:310px;'><tr><td style='text-align:center;'>Hoy es: " + customDateString(new Date()) + "</td></tr></table>";
  var content = "<table style='width:100%;text-align:center;'>";
  content += "<tr><th COLSPAN=7><span id='oneMonth'></span></th></tr>";
  content += "<tr><th>Dom</th>";
  content += "<th>Lun</th>";
  content += "<th>Mar</th>";
  content += "<th>Mie</th>";
  content += "<th>Jue</th>";
  content += "<th>Vie</th>";
  content += "<th>Sab</th></tr>";
  content += "<tr>";

  for (var i = 1; i < 42; i++){
  	content += "<td style='text-align:center;width:25px;'><span id='oneDay"+i+"'>&nbsp;</span></td>";
  	if (i % 7 == 0){
       content += "</tr><tr>";
  	}
  }
  content += "</TABLE>"
  document.getElementById('ddias').innerHTML += content;
  llenardias();
}

function ordenandodias(){
 var tdias =     0; 
 var a     =  3114; 
 var m     =     8; 
 var d     =    11; 
 var ec    =  "AC"; 

 tdias += document.getElementById('bkt').value * 144000;
 tdias += document.getElementById('kt').value  *   7200;
 tdias += document.getElementById('t').value   *    360;
 tdias += document.getElementById('w').value   *     20;
 tdias += document.getElementById('k').value   *      1;

 var coeficiente;
 var dinicio=0,tzo1=100,tzo2=100,ha1=100,ha2=100;
 var kinini=0;

 for(var coe=0;coe<14;coe++){
    coeficiente=tiempo[coe].split('^');
    if(tdias>coeficiente[4]){
      a  =  coeficiente[2]; 
      ec =  coeficiente[3]; 
      kinini = coeficiente[4]; 
      dinicio = coeficiente[4];
      tzo1 = coeficiente[10];
      tzo2 = coeficiente[11];
      ha1  = coeficiente[12];
      ha2  = coeficiente[13];
    }
 }
 
 for(var kin=kinini;kin<tdias;kin++){
   switch(m){
      case 1:
         if(d==31){d=1; m++;}
         else d=d+1
      break;
      case 2:
         if(ec=="AC"){
            if(isbis(a-1)==0){
               if(d==29){ d=1; m++; } 
               else d=d+1
            }else if(d==28){d=1; m++;
            }else d=d+1
            
         }
         if(ec=="DC"){
            if(isbis(a)==0){
               if(d==29){d=1; m++; } 
               else d=d+1
            }else if(d==28){d=1; m++;
            }else d=d+1
         }
      break;
      case 3:
         if(d==31){d=1; m++;}
         else d=d+1
      break;
      case 4:
         if(d==30){d=1; m++;}
         else d=d+1
      break;
      case 5:
         if(d==31){d=1; m++;}
         else d=d+1
      break;
      case 6:
         if(d==30){d=1; m++;}
         else d=d+1
      break;
      case 7:
         if(d==31){d=1; m++;}
         else d=d+1
      break;
      case 8:
         if(d==31){d=1; m++;}
         else d=d+1
      break;
      case 9:
         if(d==30){d=1; m++;}
         else d=d+1
      break;
      case 10:
         if(d==31){d=1; m++;}
         else d=d+1
      break;
      case 11:
         if(d==30){d=1; m++;}
         else d=d+1
      break;
      case 12:
         if(d==31){
          d=1;
          m=1; 
          if(ec=="AC"){
             if(a==1){
                ec="DC";
                a=0;
             }else a--; 
          }
          if(ec=="DC") a++;

         }
         else d=d+1
      break;
   }
 }
 document.getElementById('diahoy').value = d;
 document.getElementById('mes').value    = m;
 document.getElementById('anyo').value   = a;
 document.getElementById('era').value    = ec;
 llenardias();
 caltzolhaab(tzo1,tzo2,ha1,ha2,dinicio,tdias);
}

function cargardatos(){
  var oneDate = new Date();
  document.getElementById('diahoy').value = oneDate.getDate();
  document.getElementById('mes').value    = oneDate.getMonth()+1;
  document.getElementById('anyo').value   = oneDate.getFullYear();
  document.getElementById('era').value    = "DC";

  dias();
  lunadias()
  acuentalarga();
}