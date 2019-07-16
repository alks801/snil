# snil
Flex-based minimalistic React lib with positioning wrappers and useful components.

Currently added components and helpers:
* __Row__ - wrapper
Possible props:
  * align
  * justify
  * htmlTag
* __Column__ - wrapper
  * align
  * justify
  * htmlTag
  * width
  * offset
* __Button__ - component
* __ClassComposer__ - dynamic class adding function

## Usage:
### Row
Parent wrapper that provides horizontal orientation.
Column - usually child component for Row.
Example:
```
<Row align="middle" style={{ height: 100, border: "2px solid blue" }}>
  <Column
    justify="right"
    width={8}
    align="middle"
    style={{ height: "50%", border: "1px solid green" }}
  >
    Column1
  </Column>
  <Column
    align="bottom"
    style={{ height: "70%", border: "1px dashed red" }}
  >
    Column2
  </Column>
</Row>
```
It will looks like:

![alt text](https://i.imgur.com/g6az7Ed.png "Code")

Next components will be added soon :)
