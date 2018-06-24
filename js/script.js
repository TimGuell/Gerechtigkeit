"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
	"Lohnabrechnung": "LohnabrechnungBG.jpg",
	"BettlerScene": "BettlerBG.jpg",
	"Einkaufsstraße": "einkaufsstraßeBG.jpg"
};

// Define the Characters
const characters = {
	"AylinErstaunt": {
	 		 "Name": "Aylin",
	 		 "Color": "#DC143C",
				"Face": "AylinErstaunt.png"
},
	"AylinErzählend": {
			 "Name": "Aylin",
			 "Color": "#DC143C",
				"Face": "AylinErzaehlend.png"
},
	"AylinLachend": {
			 "Name": "Aylin",
			 "Color": "#DC143C",
				"Face": "AylinLachend.png"
},
	"AylinNeutral": {
			 "Name": "Aylin",
			 "Color": "#DC143C",
				"Face": "AylinNeutral.png"
},
	"AylinUnzufrieden": {
			 "Name": "Aylin",
			 "Color": "#DC143C",
				"Face": "AylinUnzufrieden.png"
},

	"FinnErstaunt": {
			 "Name": "Finn",
			 "Color": "#DC143C",
				"Face": "FinnErstaunt.png"
},
	"FinnErzählend": {
			 "Name": "Finn",
			 "Color": "#DC143C",
				"Face": "FinnErzaehlend.png"
},
	"FinnLachend": {
			 "Name": "Finn",
			 "Color": "#DC143C",
				"Face": "FinnLachend.png"
},
	"FinnNeutral": {
			 "Name": "Finn",
			 "Color": "#DC143C",
				"Face": "FinnNeutral.png"
},
	"FinnUnzufrieden": {
			 "Name": "Finn",
			 "Color": "#DC143C",
				"Face": "FinnUnzufrieden.png"
},

	 "MelinaErstaunt": {
				"Name": "Melina",
				"Color": "#DC143C",
				 "Face": "MelinaErstaunt.png"
},
	 "MelinaErzählend": {
				"Name": "Melina",
				"Color": "#DC143C",
				 "Face": "MelinaErzaehlend.png"
},
	 "MelinaLachend": {
				"Name": "Melina",
				"Color": "#DC143C",
				 "Face": "MelinaLachend.png"
},
	 "MelinaNeutral": {
				"Name": "Melina",
				"Color": "#DC143C",
				 "Face": "MelinaNeutral.png"
},
	 "MelinaUnzufrieden": {
				"Name": "Melina",
				"Color": "#DC143C",
				 "Face": "MelinaUnzufrieden.png"
},
	 "Bettler": {
		 		"Name": "Bettler",
				"Color": "#A6651F",
	},
	 "Arbeitskollegin": {
		 		"Name": "Arbeitskollegin",
				"Color": "#CA1089",
				"Face": "Strasse-Kollegin.png"
	},
	 "Erzähler": {
			 "Name": "Erzähler",
			 "Color": "#5223EE",
	},
	 "Avatar": {
			"Name": "Du",
			"Color": "#11ECCA",
 }
};

let script = {
	// The game starts here.

	//Scene 1
	"Start":[
	"scene Lohnabrechnung with fadeIn",
	"Erzähler Deine Arbeit für heute ist geschafft!",
	"Erzähler Jetzt noch eben zur Chefin, die Lohnabrechnung abholen.",
	"Erzähler Besonders viel Geld ist es leider wieder nicht. Du denkst dir…",
	"jump Scene2"
],
	//Scene 2
	"Scene2":[
	"Avatar Wie soll ich denn von dem Geld schon wieder all meine Rechnungen bezahlen?",
	"Avatar Die Miete hier ist so hoch, und die Handyrechnung kommt auch noch dazu…",
	"Avatar Und die Ratenzahlung für den Laptop kommt ja auch noch dazu. Wie soll ich das diesen Monat nur stemmen?",
	"jump Scene3"
],
	//Scene 3
	"Scene3":[
	"scene Einkaufstraße with fadeIn",
	"Erzähler Du bist mit deiner Arbeitskollegin auf dem Weg nach Hause. Sie hört einfach nicht auf zu reden…",
	"Arbeitskollegin Oh man, diese Halsabschneider! An den Azubis kann man ja sparen…",
	"Arbeitskollegin In anderen Firmen ist das anders. Mein Freund arbeitet bei einer großen Autofirma und bekommt fast das dreifache Gehalt. Wie ungerecht ist das denn?",
	"Arbeitskollegin Außerdem glaube ich, die Chefin mag mich nicht, weil ich eine Frau bin. Dabei ist sie doch selber eine Frau!",
	"jump Scene4"
],
	//Scene 4
	"Scene4":[
	"scene BettlerScene with fadeIn",
	"Bettler Hallo, habt ihr ein paar Euro für mich?",
	"Arbeitskollegin Wie dreist ist das denn? Für wen hältst du uns? Für die Wohlfahrt?",
	"Erzähler Der Bettler schaut euch empört und vorwurfsvoll an und schaut dann beschämt nach unten. Dein Freund geht an ihm vorbei – du bist total verunsichert.",
	"Arbeitskollegin Ich frage mich manchmal, was die eigentlich von einem denken?",
	"Arbeitskollegin Der sitzt den ganzen Tag faul herum und will dann noch mein hart verdientes Geld. Der kann doch Hartz IV beantragen, oder ist der zu doof dafür?",
	"Arbeitskollegin Wenn ich dem was gebe, kauft er sich eh nur Alkohol oder Drogen. Von mir bekommt so einer grundsätzlich nix.",
	"jump Scene5"
],

	//Scene 5 - Islam
	"Scene5":[
	"Erzähler Bei der nächsten Ecke unterbricht deine Arbeitskollegin ihren Monolog und geht in eine andere Richtung. Du machst dich auf den Weg zu eurem Stammcafé, wo du dich mit Melina, Sarah und Finn triffst.",
	//"scene Cafe with fadeIn",
	"FinnErstaunt Hey, was ist denn mit dir passiert? Du siehst ja total durch den Wind aus?",
	"Avatar Meine Arbeitskollegin und ich waren unterwegs und da hat uns so ein Typ um Geld angebettelt.",
	"Avatar Sie war total unfreundlich und hat ihn auch ein wenig abwertend behandelt, sie sei nicht die Wohlfahrt und so…",
	"AylinErstaunt Wie heftig ist das denn? Das ist doch auch nur ein Mensch",
	"Avatar Ja, aber ich war mir auch sehr unsicher, ob er das Geld nicht nur verschwenden würde. Er hat auch ein bisschen nach Alkohol gestunken…",
	"MelinaUnzufrieden Ja, aber deswegen ist das noch lange kein Grund, ihn so anzufahren, wie es deine Kollegin getan hat.",
	"Avatar Ja, da hast du schon Recht. Aber ich habe gerade erst meinen Lohn bekommen und schon soll ich etwas abgeben?",
	"Avatar Ich weiß doch selber nicht, wie ich diesen Monat über die Runden kommen soll.",
	"Avatar Was hättet ihr denn gemacht? Hättet ihr etwas gegeben?",
	"AylinNeutral Also als Muslima ist es sogar eine religiöse Pflicht, Armen zu helfen. Jedes Jahr eine Abgabe als Almosen zu spenden, ist eine der fünf Säulen des Islam.",
	"AylinErzählend Auch das Fasten im Ramadan soll uns helfen, an die Armen zu denken. Man verzichtet auf Essen und trinken, damit das Hungergefühl daran erinnert, wie sich Arme und Hungernde fühlen.",
	//??????ZWISCHENQUIZ??????
	"jump Scene6"
],
	//Scene 6 - Judentum
	"Scene6":[
	"MelinaNeutral So eine Pflicht gibt es auch bei uns Juden. Jeder erwachsene Jude soll ganze 10% seines Einkommens spenden.",
	"MelinaErzählend Die Vorgabe kommt aus der Tora. Im Buch debarîm wird damit geregelt, dass Arme, Witwen und Waisen einen Anspruch auf Almosen haben.",
	"jump ChoiceScene1"
],

	"ChoiceScene1":[
	"Erzähler Sie sind also nicht auf die Mildtätigkeit der Menschen angewiesen, sondern haben ein Recht auf Hilfe.",
	{"Choice":{
			"Zusatzinfo1":{
					"Text": "Zusatzinformation 1",
					"Do": "jump Zusatzinfo1"
			},
			"Zusatzinfo2":{
					"Text": "Zusatzinformation 2",
					"Do": "jump Zusatzinfo2"
			},
			"Weiter":{
					"Text": "Weiter spielen",
					"Do": "jump Weiter1"
			},
		}}
],
	"Weiter1":[
	"FinnErstaunt Und warum haben diese ein Anrecht darauf?",
	"MelinaNeutral In der jüdischen Vorstellung hat Gott dem Volk Israel sein Land zur Verfügung gegeben, und jeder hat eigentlich seinen gerechten Anteil.",
	"MelinaErzählend Es liegt also eine ungerechte Verteilung vor, wenn nun die Armen weniger oder gar nichts besitzen, die Reichen aber Unmengen.",
	"jump ChoiceScene2"
],

"ChoiceScene2":[
"Avatar Sie sind also nicht auf die Mildtätigkeit der Menschen angewiesen, sondern haben ein Recht auf Hilfe?",
{"Choice":{
		"Zusatzinfo3":{
				"Text": "Zusatzinformation",
				"Do": "jump Zusatzinfo3"
		},
		"Weiter":{
				"Text": "Weiter spielen",
				"Do": "jump Weiter2"
		},
	}}
],

	"Weiter2":[
	"MelinaErzählend Ja genau! Und auch Gott übernimmt die Fürsorge für die Armen und Waisen.",
	"Avatar Zehn Prozent vom Einkommen ist aber ganz schön viel, oder? Was ist, wenn ich selber kaum Geld habe?",
	"MelinaErzählend Es geht letztlich auch eher um eine Richtlinie. Wer weniger hat, muss nicht Zehn Pozent spenden, aber jeder ist verpflichtet, zu helfen, je nach seinen Möglichkeiten.",
	"MelinaNeutral Es gibt dazu auch eine schöne Geschichte über Ruth, die auf dem Acker des Boas Getreideähren pflückte, damit sie zu essen hat.",
	"AylinErzählend Boas hält sich an das Gesetz, überlässt ihr von seiner Ernte und lobt sogar ihre Tüchtigkeit.",
	"jump ChoiceScene3"
],

	"ChoiceScene3":[
	"Erzähler Weißt du denn was das Buch Ruth ist?",
	{"Choice":{
			"Zusatzinfo4":{
					"Text": "Zusatzinformation",
					"Do": "jump Zusatzinfo4"
			},
			"Weiter":{
					"Text": "Weiter spielen",
					"Do": "jump Weiter3"
			},
		}}
	],

	"Weiter3":[
	"Avatar Ich finde es trotzdem schwer, abzuwägen. Ich bin ja auch nicht gerade reich.",
	"MelinaErzählend Klar. Auch trotz religiöser Pflicht fällt es schwer, in solchen Momenten zu entscheiden. Keiner von uns hat einen Goldesel…",
	"FinnErzählend Für solche Situationen habe ich ein Armband, das mir helfen soll, mich richtig zu entscheiden. Darauf stehen die Buchstaben W.W.J.D.",
	//??????ZWISCHENQUIZ??????????
	"jump ChoiceScene4"
],

	"ChoiceScene4":[
	"FinnNeutral Jesus sagt zu seinen Jüngern, dass wer einem notleidenden hilft, damit eigentlich ihm, Jesus, hilft.",
	"FinnErzählend Es geht darum, dass man Menschen zu einem würdigen Leben verhilft, zum Beispiel mit genügend Essen.",
	"Avatar Das ist aber auch ein wirklich hoher Anspruch, oder?",
	{"Choice":{
			"Zusatzinfo5":{
					"Text": "Zusatzinformation",
					"Do": "jump Zusatzinfo5"
			},
			"Weiter":{
					"Text": "Weiter spielen",
					"Do": "jump Weiter4"
			},
		}}
],
	"Weiter4":[
	"FinnErzählend Klar ist das eine sehr hohe moralische Forderung, die Jesus da an uns stellt. Auch dass man geben soll, ohne zurückzuverlangen. Das widerspricht unserem ausgleichenden Gerechtigkeitsgefühl.",
	"FinnNeutral Aber Jesus hat nicht nur Gerecht geurteilt. Er hat zum Beispiel die Ehebrecherin von ihren Sünden freigesprochen. Er war also gerecht und barmherzig zugleich.",
	"AylinErzählend Es geht darum, dass Gerechtigkeit immer mit Barmherzigkeit einhergehen muss, wie zwei Seiten einer Medaille.",
	"AylinNeutral Fast jede Sure im Koran beginnt deshalb auch mit den Worten: „Im Namen Allah, des barmherzigen Erbarmers!“. Spannend, oder?",
	"AylinErzählend Gott ist gleichzeitig „der Gerechte“ und „der Barmherzige“. Das sind zwei der vielen Namen Gottes, die Allah hat.",
	"FinnErzählend Er bleibt immer loyal zu seinem Volk, auch wenn dieses ihm gegenüber einmal ungerecht ist.",
	"FinnNeutral Wie Jesus im Christentum, so hat auch Gott, Adonaj, seinem Volk Israel immer wieder vergeben und den Bund mit ihnen erneuert.",
	//??????ZWISCHENQUIZ????????
	"jump ChoiceScene5"
],

	"ChoiceScene5":[
	"Erzähler Möchtest du weitere Informationen über den Bund Gottes erfahren?",
	{"Choice":{
			"Zusatzinfo6":{
					"Text": "Zusatzinformation",
					"Do": "jump Zusatzinfo6"
			},
			"Weiter":{
					"Text": "Weiter spielen",
					"Do": "jump Weiter6"
			},
		}}
],

	"Weiter6":[
	"AylinErzählend Wir dürfen uns also Gerechtigkeit nicht ohne Barmherzigkeit vorstellen – aber auch umgekehrt Barmherzigkeit nicht ohne Gerechtigkeit.",
	"AylinNeutral Denn wer nur Gerecht, aber nicht Barmherzig ist, wird herzlos, übt keine Nachsicht mehr und handelt dann grausam und kaltblütig.",
	"AylinErzählend Und wer nur barmherzig ist, ohne gerecht zu bewerten, der macht keinen Unterschied zwischen dem Guten und dem Bösen. Er behandelt beide gleich und tut damit dem Guten unrecht.",
	"Avatar Ich hätte dem Bettler also unbedingt etwas geben müssen?",
	"AylinErzählend Weißt du, ich gebe auf der Straße auch ungerne Geld. Ich spende stattdessen lieber an Hilfsorganisationen oder soziale Stiftungen.",
	"AylinNeutral Bei den Tafelläden kommt die Spende zum Beispiel schnell und direkt an bedürftige Menschen.",
	"AylinErzählend Aber es gibt auch andere Ungerechtigkeiten, gegen die man vorgehen kann. Und wie es scheint, glauben wir alle, dass jeder etwas zu Gerechtigkeit beitragen kann und soll.",
	"MelinaErzählend Wie du dich entscheidest, hängt allein von dir ab. Wir wollen dir da nichts vorschreiben.",
	"jump Scene7"
],

	//Scene 7 - Straße
	"Scene7":[
	"Erzähler Du hast dich von deinen Freunden verabschiedet und stehst wie vorhin auf der Straße. Du schaust dich um, welche anderen Ungerechtigkeiten Aylin noch gemeint haben könnte. Du denkst dir…",
	"Avatar Was soll ich denn das nächste mal tun? Bin ich so arm, dass ich nichts geben kann? Oder kann ich Menschen auf eine andere Art helfen? Welche Ungerechtigkeiten könnte Sarah da noch so gemeint haben?",
],


//Zusatzinformationen
	"Zusatzinfo1": [
		"Wusstest du schon? Die fünf Bücher Mose werden im jüdischen nach ihrem Anfangswort bezeichnet. Der Name des fünften Buches Mose „debarîm“ heißt übersetzt „Worte“ und wird von Christen „Deuteronomium“ genannt.",
		"Wenn du wissen willst, wie die anderen Bücher Mose heißen, schau doch im  Wiki über die Tora nach.",
		"jump ChoiceScene1"
],
	"Zusatzinfo2": [
		"Kapitel 26,12: Wenn du den Zehnten deines ganzen Ertrages zusammengebracht hast im dritten Jahr, das ist das Zehnten-Jahr, so sollst du ihn dem Leviten, dem Fremdling, der Waise und der Witwe geben, das sie in deiner Stadt essen und satt werden.",
		"jump ChoiceScene1"
],
	"Zusatzinfo3": [
		"Wusstest du schon?",
		"Der Hebräische Begriff für Gerechtigkeit heißt „Zedaka“. Übersetzt bedeutet das „gerechte Ordnung“.",
		"jump ChoiceScene2"
],
	"Zusatzinfo4": [
		"Wusstest du schon?",
		"Das Buch Ruth ist eines der kürzesten Bücher der jüdischen und christlichen Bibel. Es ist eine Novelle aus nur 85 Versen.",
		"Du kannst sie im  Wiki nachlesen.",
		"jump ChoiceScene3"
],
	"Zusatzinfo5": [
		"Das findet sich im Matthäus-Evangelium, im 25. Kapitel:",
		"Jesus sagt: „Denn ich war hungrig und ihr habt mir zu essen gegeben; ich war durstig und ihr habt mir zu trinken gegeben; ich war fremd und obdachlos und ihr habt mich aufgenommen.Und am Schluss sagt er noch: „Was  ihr für einen meiner geringsten Brüder getan habt, das habt ihr mir getan.“",
		"Die Christen verstehen das als Auftrag, barmherzig zu handeln und haben daraus die sogenannten „Werke der Barmherzigkeit“ abgeleitet. Du findest sie im  Wiki.",
		"jump ChoiceScene4"
],
	"Zusatzinfo6": [
		"So heißt es im Buch Exodus:",
		"„JHWH ist ein barmherziger und gnädiger Gott, langmütig, reich an Huld und Treue.“ Aber kurz darauf heißt es auch: „Er bewahrt tausenden Huld, nimmt Schuld, Frevel und Sünde weg, lässt aber den Sünder nicht ungestraft.“",
		"Im Wiki kannst du weitere Infos über den Bund Gottes mit Israel erhalten",
		"jump ChoiceScene5"
]
};
