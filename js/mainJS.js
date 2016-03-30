/**
 * Created by steve on 29/03/2016.
 */

var main = function() {

    var x2js = new X2JS();
    var xmlText = '<?xml version="1.0" encoding="UTF-8"?><TEI xmlns="http://www.tei-c.org/ns/1.0" xml:id="PrLBrghtn-0001"><teiHeader><fileDesc><titleStmt><title>1840: William Broughton, Bishop of Australia, to unknown recipients (perhaps within the Anglican church in England?)</title> <author> <name type="person" key="http://wtap.vuw.ac.nz/eats/entity/72079/">William Broughton, Bishop of Australia</name> </author> </titleStmt> <publicationStmt> <p/> </publicationStmt> <sourceDesc> <p>Wellington City Libraries book of typed transcriptions, spine title "Hadfield, Typescript Miscellaneous Fragments 1833-1897", stamped 19 Dec 1979.  Section: Typescripts of inwards letters extracts + fragments.  "EXTRACTS, RELATING TO THE REV. OCTAVIUS HADFIELD, taken from "New-Zealand Mission. Visit of the Bishop of Australia to the Church Missionary Societys Mission in New Zealand: and notices of its state and progress. 1840."  Page 28.</p> <p>Re-typed and encoded into TEI by Melissa Bryant, 11.12.15</p> <p>Relates to the Bishops 1838 visit to New Zealand.</p> </sourceDesc> </fileDesc> <profileDesc> <correspDesc> <correspAction type="sent"> <date when="1840">1840</date> </correspAction> </correspDesc> </profileDesc></teiHeader> <text> <front> <p>1840: William Broughton, Bishop of Australia, to the Church Missionary Society</p> </front> <body> <p><!--previous editors note: p.6.-->Arrival and reception at the Bay of Islands. ... I embarked on Wednesday, December 12, 1838, on board H.M.S. "Pelorus", commanded by Capt. Francis Harding; who, at my request, had obligingly consented to afford me a passage to the various points which I was desirous of visiting.  On the following day we left this harbour (Sydney); and on the morning of Friday, 21st December, anchored in the Bay of Islands, having experienced no incident worthy of observation during the passage.  The Rev. O. Hadfield -- whom, on the recommendation of the Society, I had, at my late Ordination, admitted to Deacons Orders -- accompanied me; and I was gratified by observing the perceptible benefit which his health had already derived from change of climate. ... </p> <p><!--previous editors note: p.9.-->... I officiated again at Paihia on Christmas Day ... On Sundays 30th December and 6th January, I also too part in the Services of the Missionary Chapel; and on the last of these days, being the day of the Epiphany, and therefore a most appropriate occasion, I, in the same place, conferred Priests Orders on Mr. Hadfield .... In the Ordination service I was assisted by the Rev. Henry Williams, who had arrived at home after an absence of two months, the Rev. W. Williams, and the Rev. R. Maunsell.  The feelings excited in the minds of all present, on this solemn occasion, were most gratifying; and to themselves, I trust, would afford permanent benefit. ... </p> <p><!--previous editors note: p.26.-->A..<!--sic--> All appeared to me, so far as I was able to judge, to be animated by a good spirit, and a desire, according to their several capabilities, to work the work of God.  I am, however, in duty bound to state my persuasion, that the present Missionary Body is inadequate to the successful prosecution of that work and labour of love upon which their cares are bestowed.  Indeed, they do not occupy, to the uttermost, even their present limits; and these require to be extended day by day, so that the necessity for additional help is becoming constantly more urgent.  The Society has been informed that Mr. Hadfield was added to their number while I remained; and since that time the Rev. R. Taylor has proceeded to join the establishment.  The services of one or two of these gentlemen must, however, be absorbed by the charge of educating the sons of Missionaries; and the other will be required to institute a new Missionary station at the East Cape, where there appears to be a most favourable opening.  The Mission, therefore, within its present limits, will continue as inefficiently supplied with Clergymen for Missionary purposes as before; and it is most earnestly to be desired, for the sake of the high and eternal interests which are at stake, that this deficiency should not be suffered to continue.</p> </body> </text> </TEI>';
    var jsonObj = x2js.xml_str2json( xmlText );

    var jsonObjectString = JSON.stringify(jsonObj,null,4);

    function prettyPrint(jsonObj){

        function getJsonString(obj, text){
            for (var key in jsonObj) {
                if (jsonObj.hasOwnProperty(key)) {
                    if (jsonObj[key] == "[object Object]"){
                        //console.log(jsonObj[key]);
                        return getJsonString(jsonObj[key], text);
                    }
                    else {
                        text += jsonObj[key];
                    }

                    //console.log(key + " -> " + jsonObj[key]);
                }
            }
            console.log(text);
        }

        var testString = "";

        for (var key in jsonObj) {
            if (jsonObj.hasOwnProperty(key)) {
                console.log(key + " -> " + jsonObj[key]);



            }
        }

        //for (var i = 0; i < objLength(jsonObj); i++){
        //    //testString += jsonObj[i] + "";
        //    console.log(jsonObj);
        //}

        //console.log(testString);
    }

    $('#search-button').click(function() {
        $('.jumbotron').fadeOut(300);
    });

    $('.web-name').click(function(){
        $('.jumbotron').fadeIn(300);
    });

    $('.btn.btn-primary').click(function(){
        $('.pic-will').fadeToggle(300);
        $('.will-name').fadeToggle(300);
        $('.data-text').fadeToggle(300);



        var xmlVisibility = $('#xml-content').css('visibility');
        if (xmlVisibility == "visible"){
            $('#xml-content').css('visibility', "hidden");
            $('#xml-content').text("");
            $('.btn.btn-primary').css('background-color', '#fafafa');
            $('.btn.btn-primary').css('color', 'black');

        }
        else {
            $('#xml-content').css('visibility', "visible");
            $('#xml-content').text(jsonObjectString);
            $('.btn.btn-primary').css('background-color', 'steelblue');
            $('.btn.btn-primary').css('color', '#fafafa');
        }
        //$('.btn.btn-primary').fadeOut(300);
    });

    var test = prettyPrint(jsonObj);

};

$(document).ready(main());