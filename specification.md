# Custom Specification

Since no specificiation was given, I came up with my own specification based on the little knownledge I know about courier services.

So the api I have written is based on that specification, if the specification changes the api changes.

## Models
* Parcel
* Shipment

### Parcel
The parcel model describe a particular item to be shiped. It has an id and a weight

### Shipment
The Shipment model describe an order, it has the destination, distance and a list of parces to be delivered to that destination

## Actions
* Parcel
  * **POST /api/parcels** Create a parcel
  * **GET /api/parcels/:parcelId** Fetch a parcel based on id
* Shipment
  * **POST /api/shipments** Create a shipment
  * **GET /api/shipments/:shipmentId" Get a shipment based on id
  * **GET /api/shipments** Get all the shipments
