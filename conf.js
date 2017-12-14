/*jslint node: true */
"use strict";

exports.port = 6655;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bSaveJointJson = true;
exports.bLight = false;


exports.storage = 'sqlite';


exports.initial_witnesses = [
	'6KPISPGMAHERC257F75ZUDHKQZUQPNY5',
	'6VKS5LF34QDDZRDDMMIULM5SRKWUE3YD',
	'73K3UOOOZ2BK2V3BDEWPHLZ3HOUAT2TZ',
	'7TQCSQQW4JILCCWH4VJMET3QM732HIGG',
	'FC33FU3F5PGDFCW6CLK7AXMFFTPPGDEV',
	'N4C2Y2DN5H6QXM3XBY7UD6DPMKXRXBTR',
	'NKKS4R7NXKZBFOH6L5KEJSYT4D52N3U5',
	'Q24ZGPFDUG7OCJJF7LA4PUIKSHQ4D4QG',
	'R6ZQPOMHUMJF3DMKCD3CPZNYMVGJ5AIX',
	'UGNLJAEQ5BT6KX3VWD57KKPQ73VX4SWW',
	'WPIHACDCVHBQZ564DXWXTRTMV6DRWJ7X',
	'YOSNQIOAERMAQDKN2JDR2B6UO3W5UGOE'
];

exports.initial_peers = [
	'ws://galilei.trustnote.org/tn',
	'ws://newton.trustnote.org/tn',
	'ws://einstein.trustnote.org/tn'
];

console.log('finished relay conf');
