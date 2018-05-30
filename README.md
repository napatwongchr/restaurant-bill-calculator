## Restaurant bill calculator
This project was created for assignment purpose.

## Instruction
This application is divided into 3 parts.

1. Employee - User can be able to calculate bill according to table.
2. Admin - User can be able to Add/Edit/Delete promotion codes.
3. Customer - User can be able to reserve the seats.

### Testing

## Application capabilities

## Employee section
- System can be able to calculate the bill price according to table.
- System is automatically applied code according to bill's total price (For instance, total price > 6000 or 1000).
- System can be able to applied highest discount price code for customer automatically, if the bill is within the scope of discount rules.
- System can be able to remove discount code from bill.
- System can be able to calculate exchanges.
- System can be able to apply 1 discount code only.

## Admin section
- System can be able to add / edit / delete discount code
- Added / Edited codes can be able to applied from bill calculation.
*

## Employee section
- Future task

## Data
The application stores data in the form of json in /src/data. All related data will be loaded from index page.
* You can edit data here for testing purpose

It contains 2 entities, as followings:

1. Table.json
- Table data can generate by CreateMockData.js in /src/helpers
- Table composes many different fields: id, type, capacity, people, items (list of foods)

2. DiscountCode.json
- Discount codes composes many different fields: codeName, amountDiscount, discountCodeType, limitPeople

### Initial data
The application has generated initial data for itself.

In Table.json, there are 24 tables, which are
- Counter table (1 seat) for 12 tables
- 2 seats table for 4 tables
- 4 seats table for 6 tables
- 8 seats table for 2 tables

I have assumed that ... for testing purpose (Tbd, tell that which table has reserved)

In DiscountCodes, there are 3 different codes, which are
- "LUCKY ONE" for 1 people for 15% discount
- "LUCKY TWO" for 2 people for 20% discount
- "4PAY3" for 4 people for 459 baht discount

There are also other 2 codes that discount from bill, which are
- Total price > 6000 then discount for 25%
- Total price > 1000 then discount for 15%


## Future tasks
- Seats reservation module
- Responsive
- Create storybook and build style guide
- Etc.
