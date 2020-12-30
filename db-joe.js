/*

*********************************** METHOD 1 ***********************************

Project ID: 15
Instructions: 1041, 1567, 4598, 2345

4 rows in "instructions" table:
id      projectId     order       text
1041    15            3           Open Box
1567    15            2           Wait for shipment
4598    15            1           Order the keyboard
2345    15            4           Enjoy

MAKE INSTRUCTION FOR THIS PROJECT EQUAL TO NEW ORDER
instruction id: 2345, order: 2

UPDATE ALL OTHER INSTRUCTIONS WITH ORDER EQUAL TO OR GREATER ORIGINAL ORDER IN THIS PROJECT
projectId: 15, less than order 4, equal to greater than order 2

{
  id: 15,
  name: "Getting a new keyboard",
  instructions: [
    { id: 1041, projectId: 15, order: 4, text: "Open Box" }
    { id: 1567, projectId: 15, order: 3, text: "Wait for shipment" }
    { id: 4598, projectId: 15, order: 1, text: "Order the keyboard" }
    { id: 2345, projectId: 15, order: 2, text: "Enjoy" }
    { id: 2346, projectId: 15, order: 5, text: "Happy typing!" }
  ]
}

************************************** UI **************************************

            ->>>> Order the keyboard
            ->>>> Wait for shipment
            ->>>> Open box
            ->>>> Enjoy

*********************************** METHOD 2 ***********************************

4 rows in "instructions" table:
id      projectId     text
1041    15            Open Box
1567    15            Wait for shipment
4598    15            Order the keyboard
2345    15            Enjoy

"projects" table:
id      order
15      "[4598, 1567, 1041, 2345]"

{
  id: 15,
  name: "Getting a new keyboard",
  order: "[4598, 1567, 1041, 2345, 2346]",
  instructions: [
    { id: 1041, projectId: 15,  text: "Open Box" }
    { id: 1567, projectId: 15,  text: "Wait for shipment" }
    { id: 4598, projectId: 15,  text: "Order the keyboard" }
    { id: 2345, projectId: 15,  text: "Enjoy" }
    { id: 2346, projectId: 15,  text: "Happy typing!" }
  ]
}

*/
