const initialState = {
	"planner": {
		/*"modal":{
			"show":false,
			"componentProps":{

			}
		},
		"metaView":true,
		"tradeStubs":[
			{
				"name":"Windtec V1",
				"uuid":"1630fa6d-ca40-4eae-9e15-3603051cdb70"
			}
		],
		"template":{
			"title":"Exported fro",
			"uuid":"1630fa6d-ca40-4eae-9e15-3603051cdb70"
		},
		"focus":{
			"isFocused":true,
			"uuid":"18c5a963-3bae-4d05-844b-9b76e18399c7",
			"focusType":"clause"
		},
		"trades":{
			"byIds":{
				"a8528013-d29a-4fbb-ab8b-c94c6b92ae78":{
					"uuid":"a8528013-d29a-4fbb-ab8b-c94c6b92ae78",
					"title":"Supplier -> Trader",
					"participants":[
						"8f088cdb-6881-4849-ba63-2af751a733e0",
						"cfa66e50-8ac0-447f-b213-95bd96dcaaee"
					]
				},
				"1041a545-2585-4677-b7f5-16b8d72c3a97":{
					"uuid":"1041a545-2585-4677-b7f5-16b8d72c3a97",
					"title":"Supplier -> IMT",
					"participants":[
						"8f088cdb-6881-4849-ba63-2af751a733e0",
						"4c9274f6-4e33-4f0a-a081-4445913736a2"
					]
				},
				"41135f55-f728-4fb4-9600-04cb2f1eedbe":{
					"uuid":"41135f55-f728-4fb4-9600-04cb2f1eedbe",
					"title":"Warehouse -> Supplier",
					"participants":[
						"de8e9652-ff79-4858-a47f-3a2c2ac8dc9f",
						"8f088cdb-6881-4849-ba63-2af751a733e0"
					]
				},
				"5983c94c-ea8f-4555-bf95-b63d5e372c27":{
					"uuid":"5983c94c-ea8f-4555-bf95-b63d5e372c27",
					"title":"IMT -> Trader",
					"participants":[
						"4c9274f6-4e33-4f0a-a081-4445913736a2",
						"cfa66e50-8ac0-447f-b213-95bd96dcaaee"
					]
				}
			},
			"allIds":[
				"a8528013-d29a-4fbb-ab8b-c94c6b92ae78",
				"1041a545-2585-4677-b7f5-16b8d72c3a97",
				"41135f55-f728-4fb4-9600-04cb2f1eedbe",
				"5983c94c-ea8f-4555-bf95-b63d5e372c27"
			]
		},*/
		"clauses":{
			"items":{
				"0de4312b-cb11-4673-bf38-616fa29a6b4a":{
					"by":"cfa66e50-8ac0-447f-b213-95bd96dcaaee",
					"to":"8f088cdb-6881-4849-ba63-2af751a733e0",
					"uuid":"0de4312b-cb11-4673-bf38-616fa29a6b4a",
					"index":0,
					"label":"Issue Master PO",
					"bracketID":"a8528013-d29a-4fbb-ab8b-c94c6b92ae78",
					"type":"contract",
					"view":"PO",
					"accord":"6aab0c4f-8bd8-4fba-9524-0351a44469f7"
				},
				"ff832e8e-f0a6-4ebc-b056-e9818876f5eb":{
					"by":"8f088cdb-6881-4849-ba63-2af751a733e0",
					"to":"cfa66e50-8ac0-447f-b213-95bd96dcaaee",
					"uuid":"ff832e8e-f0a6-4ebc-b056-e9818876f5eb",
					"index":1,
					"label":"Accept Master PO",
					"bracketID":"a8528013-d29a-4fbb-ab8b-c94c6b92ae78",
					"type":"signature",
					"view":"PO Acceptance",
					"accord":"6aab0c4f-8bd8-4fba-9524-0351a44469f7"
				},
				"a87366c3-d9da-47ab-81d0-be6cf71cba8a":{
					"by":"8f088cdb-6881-4849-ba63-2af751a733e0",
					"to":"cfa66e50-8ac0-447f-b213-95bd96dcaaee",
					"uuid":"a87366c3-d9da-47ab-81d0-be6cf71cba8a",
					"index":2,
					"label":"Assign Contract to ULL",
					"bracketID":"a8528013-d29a-4fbb-ab8b-c94c6b92ae78",
					"type":"contract_assignment",
					"view":"Contract Assignment",
					"accord":"2ee3a37e-d17b-4b2f-b57e-7a34ae9c91fc"
				},
				"54622af7-d279-48b4-9652-f7b46702d2de":{
					"by":"cfa66e50-8ac0-447f-b213-95bd96dcaaee",
					"to":"8f088cdb-6881-4849-ba63-2af751a733e0",
					"uuid":"54622af7-d279-48b4-9652-f7b46702d2de",
					"index":3,
					"label":"Agree to Assignment",
					"bracketID":"a8528013-d29a-4fbb-ab8b-c94c6b92ae78",
					"type":"assignment_signature",
					"view":"Assignment Signature",
					"accord":"2ee3a37e-d17b-4b2f-b57e-7a34ae9c91fc"
				},
				"3366f187-bd07-405b-9c33-a3012c71a63a":{
					"by":"4c9274f6-4e33-4f0a-a081-4445913736a2",
					"to":"8f088cdb-6881-4849-ba63-2af751a733e0",
					"uuid":"3366f187-bd07-405b-9c33-a3012c71a63a",
					"index":4,
					"label":"Accept Assignment",
					"bracketID":"a8528013-d29a-4fbb-ab8b-c94c6b92ae78",
					"type":"assignment_signature",
					"view":"Assignment Signature",
					"accord":"2ee3a37e-d17b-4b2f-b57e-7a34ae9c91fc"
				},
				"672c3cd9-c02a-47a2-9c9b-ed50a7d2613f":{
					"by":"de8e9652-ff79-4858-a47f-3a2c2ac8dc9f",
					"to":"8f088cdb-6881-4849-ba63-2af751a733e0",
					"uuid":"672c3cd9-c02a-47a2-9c9b-ed50a7d2613f",
					"index":5,
					"label":"Receive Cargo Notice",
					"bracketID":"41135f55-f728-4fb4-9600-04cb2f1eedbe",
					"type":"cargo_receipt",
					"view":"Cargo Receipt"
				},
				"80ec5093-11fe-4341-89b5-eacb577ded9e":{
					"by":"8f088cdb-6881-4849-ba63-2af751a733e0",
					"to":"4c9274f6-4e33-4f0a-a081-4445913736a2",
					"uuid":"80ec5093-11fe-4341-89b5-eacb577ded9e",
					"index":6,
					"label":"Invoice for Components",
					"bracketID":"1041a545-2585-4677-b7f5-16b8d72c3a97",
					"type":"invoice",
					"view":"Invoice"
				},
				"088aad15-858d-4a92-bc9f-8f36c5112950":{
					"by":"4c9274f6-4e33-4f0a-a081-4445913736a2",
					"to":"8f088cdb-6881-4849-ba63-2af751a733e0",
					"uuid":"088aad15-858d-4a92-bc9f-8f36c5112950",
					"index":7,
					"label":"Payment for Components",
					"bracketID":"1041a545-2585-4677-b7f5-16b8d72c3a97",
					"type":"payment",
					"view":"Advanced Payment"
				},
				"88286589-4386-4214-8d81-1f6be4b9ab21":{
					"by":"8f088cdb-6881-4849-ba63-2af751a733e0",
					"to":"de8e9652-ff79-4858-a47f-3a2c2ac8dc9f",
					"uuid":"88286589-4386-4214-8d81-1f6be4b9ab21",
					"index":8,
					"label":"Payment to Warehouse",
					"bracketID":"41135f55-f728-4fb4-9600-04cb2f1eedbe",
					"type":"payment",
					"view":"Advanced Payment"
				},
				"a55c6d1d-cf66-4a3e-a78b-91d1619825bb":{
					"by":"de8e9652-ff79-4858-a47f-3a2c2ac8dc9f",
					"to":"8f088cdb-6881-4849-ba63-2af751a733e0",
					"uuid":"a55c6d1d-cf66-4a3e-a78b-91d1619825bb",
					"index":9,
					"label":"Shipment Notice",
					"bracketID":"41135f55-f728-4fb4-9600-04cb2f1eedbe",
					"type":"shipment_notice",
					"view":"Shipment Notice"
				},
				"e337e5af-54ad-48ef-a73d-586ef7d59864":{
					"by":"8f088cdb-6881-4849-ba63-2af751a733e0",
					"to":"4c9274f6-4e33-4f0a-a081-4445913736a2",
					"uuid":"e337e5af-54ad-48ef-a73d-586ef7d59864",
					"index":10,
					"label":"Shipment Notice",
					"bracketID":"1041a545-2585-4677-b7f5-16b8d72c3a97",
					"type":"shipment_notice",
					"view":"Shipment Notice"
				},
				"517fee6c-3064-4087-9513-14efbadbef7e":{
					"by":"8f088cdb-6881-4849-ba63-2af751a733e0",
					"to":"cfa66e50-8ac0-447f-b213-95bd96dcaaee",
					"uuid":"517fee6c-3064-4087-9513-14efbadbef7e",
					"index":11,
					"label":"Invoice on behalf of ULL",
					"bracketID":"a8528013-d29a-4fbb-ab8b-c94c6b92ae78",
					"type":"invoice",
					"view":"Invoice"
				},
				"18c5a963-3bae-4d05-844b-9b76e18399c7":{
					"by":"cfa66e50-8ac0-447f-b213-95bd96dcaaee",
					"to":"4c9274f6-4e33-4f0a-a081-4445913736a2",
					"uuid":"18c5a963-3bae-4d05-844b-9b76e18399c7",
					"index":12,
					"label":"Payment For Shipment",
					"bracketID":"5983c94c-ea8f-4555-bf95-b63d5e372c27",
					"type":"payment",
					"view":"At Sight Payment"
				}
			},
			"ids":[
				"0de4312b-cb11-4673-bf38-616fa29a6b4a",
				"ff832e8e-f0a6-4ebc-b056-e9818876f5eb",
				"a87366c3-d9da-47ab-81d0-be6cf71cba8a",
				"54622af7-d279-48b4-9652-f7b46702d2de",
				"3366f187-bd07-405b-9c33-a3012c71a63a",
				"672c3cd9-c02a-47a2-9c9b-ed50a7d2613f",
				"80ec5093-11fe-4341-89b5-eacb577ded9e",
				"088aad15-858d-4a92-bc9f-8f36c5112950",
				"88286589-4386-4214-8d81-1f6be4b9ab21",
				"a55c6d1d-cf66-4a3e-a78b-91d1619825bb",
				"e337e5af-54ad-48ef-a73d-586ef7d59864",
				"517fee6c-3064-4087-9513-14efbadbef7e",
				"18c5a963-3bae-4d05-844b-9b76e18399c7"
			]
		},
		"participants":{
			"items":{
				"de8e9652-ff79-4858-a47f-3a2c2ac8dc9f":{
					"role":"Warehouse",
					"uuid":"de8e9652-ff79-4858-a47f-3a2c2ac8dc9f",
					"index":0,
					"userid":"DBSchenker",
					"display_name":"Warehouse"
				},
				"8f088cdb-6881-4849-ba63-2af751a733e0":{
					"role":"Seller",
					"uuid":"8f088cdb-6881-4849-ba63-2af751a733e0",
					"index":1,
					"userid":"Wintec",
					"display_name":"Supplier"
				},
				"4c9274f6-4e33-4f0a-a081-4445913736a2":{
					"role":"IMT",
					"uuid":"4c9274f6-4e33-4f0a-a081-4445913736a2",
					"index":2,
					"userid":"ULL",
					"display_name":"IMT"
				},
				"cfa66e50-8ac0-447f-b213-95bd96dcaaee":{
					"role":"Buyer",
					"uuid":"cfa66e50-8ac0-447f-b213-95bd96dcaaee",
					"index":3,
					"userid":"Flex",
					"display_name":"Trader"
				}
			},
			"ids":[
				"de8e9652-ff79-4858-a47f-3a2c2ac8dc9f",
				"8f088cdb-6881-4849-ba63-2af751a733e0",
				"4c9274f6-4e33-4f0a-a081-4445913736a2",
				"cfa66e50-8ac0-447f-b213-95bd96dcaaee"
			]
		},
		/*"accords":{
			"byIds":{
				"6aab0c4f-8bd8-4fba-9524-0351a44469f7":{
					"uuid":"6aab0c4f-8bd8-4fba-9524-0351a44469f7",
					"label":"Terms",
					"bracketId":"a8528013-d29a-4fbb-ab8b-c94c6b92ae78"
				},
				"2ee3a37e-d17b-4b2f-b57e-7a34ae9c91fc":{
					"uuid":"2ee3a37e-d17b-4b2f-b57e-7a34ae9c91fc",
					"label":"Assignment",
					"bracketId":"a8528013-d29a-4fbb-ab8b-c94c6b92ae78"
				}
			},
			"allIds":[
				"6aab0c4f-8bd8-4fba-9524-0351a44469f7",
				"2ee3a37e-d17b-4b2f-b57e-7a34ae9c91fc"
			]
		}*/
	},
};

export default initialState;
