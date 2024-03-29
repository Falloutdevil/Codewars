/*
DESCRIPTION:
Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |
 */

function getIssuer(number) {
    let cardStr = number.toString();

    if (/^3[4|7]\d{13}$/.test(cardStr)) return 'AMEX';
    if (/^4(\d{12}|\d{15})$/.test(cardStr)) return 'VISA';
    if (/^5[1-5]\d{14}$/.test(cardStr)) return 'Mastercard';
    if (/^6011\d{12}$/.test(cardStr)) return 'Discover';

    return 'Unknown'
}