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
  * Create a parcel
  * Fetch a parcel based on id
* Shipment
  * Create a shipment
  * Get a shipment based on id
  * Get all the shipments
