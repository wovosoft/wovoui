<template>
    <Container class="mt-5">
        <h3>Append</h3>
        <TypeHead
            preload
            :get-option="v=>v.text"
            :get-label="v=>v?v.text:'Not Selected'"
            :get-items="getCountries">
            <template #append>
                <Button>Search Country</Button>
            </template>
        </TypeHead>

        <TypeHead
            preload
            v-model="model"
            :get-option="v=>v.text"
            :get-label="v=>v?v.text:'Not Selected'"
            :get-items="getItems">
            <template #append>
                <Button>Append</Button>
            </template>
        </TypeHead>

        <h3 class="mt-5">Prepend</h3>
        <TypeHead
            v-model="model"
            :get-option="v=>v.text"
            :get-label="v=>v?v.text:'Not Selected'"
            api-url="https://api.github.com/search/repositories">
            <template #prepend>
                <Button>Prepend</Button>
            </template>
        </TypeHead>

        <h3 class="mt-5">Default</h3>
        <TypeHead
            v-model="model"
            :get-option="v=>v.text"
            :get-label="v=>v?v.text:'Not Selected'"
            api-url="https://api.github.com/search/repositories">
        </TypeHead>

        <h3 class="mt-5">Prepend & Append</h3>
        <TypeHead
            v-model="model"
            :get-option="v=>v.text"
            :get-label="v=>v?v.text:'Not Selected'"
            :get-items="getItems">
            <template #prepend>
                <Button>Prepend</Button>
            </template>
            <template #append>
                <Button>Append</Button>
            </template>
        </TypeHead>

        <h3 class="mt-5">Small</h3>
        <TypeHead
            toggle-size="sm"
            v-model="model"
            :get-option="v=>v.text"
            :get-label="v=>v?v.text:'Not Selected'"
            api-url="https://api.github.com/search/repositories">
            <template #append>
                <Button>Append</Button>
            </template>
        </TypeHead>
        <br/>
        {{ model }}
        <Button @click="model=null">Reset</Button>
    </Container>
</template>

<script lang="ts" setup>

import TypeHead from "../../src/components/Form/TypeHead.vue";
import {Button, Container} from "../../src";
import {ref} from "vue";

const model = ref();

function getItems(items, query) {
    let its = [];
    for (let x = 0; x <= 50; x++) {
        its.push({
            text: 'Text ' + x,
            value: 'Value ' + x
        });
    }

    items.value = its;
}

function getCountries(items, query) {
    if (!query.value) {
        items.value = countries;
    } else {
        items.value = countries.filter(i => i.text.toLowerCase().includes(query.value.toString().toLowerCase()))
    }
}

const countries = [{"text": "Andorra", "value": "AD"}, {
    "text": "United Arab Emirates",
    "value": "AE"
}, {"text": "Afghanistan", "value": "AF"}, {"text": "Antigua And Barbuda", "value": "AG"}, {
    "text": "Anguilla",
    "value": "AI"
}, {"text": "Albania", "value": "AL"}, {"text": "Armenia", "value": "AM"}, {
    "text": "Netherlands Antilles",
    "value": "AN"
}, {"text": "Angola", "value": "AO"}, {"text": "Antarctica", "value": "AQ"}, {
    "text": "Argentina",
    "value": "AR"
}, {"text": "American Samoa", "value": "AS"}, {"text": "Austria", "value": "AT"}, {
    "text": "Australia",
    "value": "AU"
}, {"text": "Aruba", "value": "AW"}, {"text": "Aland Islands", "value": "AX"}, {
    "text": "Azerbaijan",
    "value": "AZ"
}, {"text": "Bosnia And Herzegovina", "value": "BA"}, {"text": "Barbados", "value": "BB"}, {
    "text": "Bangladesh",
    "value": "BD"
}, {"text": "Belgium", "value": "BE"}, {"text": "Burkina Faso", "value": "BF"}, {
    "text": "Bulgaria",
    "value": "BG"
}, {"text": "Bahrain", "value": "BH"}, {"text": "Benin", "value": "BJ"}, {
    "text": "Bermuda",
    "value": "BM"
}, {"text": "Brunei Darussalam", "value": "BN"}, {"text": "Bolivia", "value": "BO"}, {
    "text": "Brazil",
    "value": "BR"
}, {"text": "Bahamas", "value": "BS"}, {"text": "Bhutan", "value": "BT"}, {
    "text": "Burma",
    "value": "BU"
}, {"text": "Bouvet Island", "value": "BV"}, {"text": "Botswana", "value": "BW"}, {
    "text": "Belarus",
    "value": "BY"
}, {"text": "Belize", "value": "BZ"}, {"text": "Canada", "value": "CA"}, {
    "text": "Cocos Keeling Islands",
    "value": "CC"
}, {"text": "Congo The Democratic Republic Of The", "value": "CD"}, {
    "text": "Central African Republic",
    "value": "CF"
}, {"text": "Congo", "value": "CG"}, {"text": "Switzerland", "value": "CH"}, {
    "text": "Cote D Ivoire",
    "value": "CI"
}, {"text": "Cook Islands", "value": "CK"}, {"text": "Chile", "value": "CL"}, {
    "text": "Cameroon",
    "value": "CM"
}, {"text": "China", "value": "CN"}, {"text": "Colombia", "value": "CO"}, {
    "text": "Costa Rica",
    "value": "CR"
}, {"text": "Serbia And Montenegro", "value": "CS"}, {"text": "Cuba", "value": "CU"}, {
    "text": "Cape Verde",
    "value": "CV"
}, {"text": "Christmas Island", "value": "CX"}, {"text": "Cyprus", "value": "CY"}, {
    "text": "Czech Republic",
    "value": "CZ"
}, {"text": "Germany", "value": "DE"}, {"text": "Djibouti", "value": "DJ"}, {
    "text": "Denmark",
    "value": "DK"
}, {"text": "Dominica", "value": "DM"}, {"text": "Dominican Republic", "value": "DO"}, {
    "text": "Algeria",
    "value": "DZ"
}, {"text": "Ecuador", "value": "EC"}, {"text": "Estonia", "value": "EE"}, {
    "text": "Egypt",
    "value": "EG"
}, {"text": "Western Sahara", "value": "EH"}, {"text": "Eritrea", "value": "ER"}, {
    "text": "Spain",
    "value": "ES"
}, {"text": "Ethiopia", "value": "ET"}, {"text": "Finland", "value": "FI"}, {
    "text": "Fiji",
    "value": "FJ"
}, {"text": "Falkland Islands Malvinas", "value": "FK"}, {
    "text": "Micronesia Federated States Of",
    "value": "FM"
}, {"text": "Faroe Islands", "value": "FO"}, {"text": "France", "value": "FR"}, {
    "text": "Gabon",
    "value": "GA"
}, {"text": "United Kingdom", "value": "GB"}, {"text": "Grenada", "value": "GD"}, {
    "text": "Georgia",
    "value": "GE"
}, {"text": "French Guiana", "value": "GF"}, {"text": "Guernsey", "value": "GG"}, {
    "text": "Ghana",
    "value": "GH"
}, {"text": "Gibraltar", "value": "GI"}, {"text": "Greenland", "value": "GL"}, {
    "text": "Gambia",
    "value": "GM"
}, {"text": "Guinea", "value": "GN"}, {"text": "Guadeloupe", "value": "GP"}, {
    "text": "Equatorial Guinea",
    "value": "GQ"
}, {"text": "Greece", "value": "GR"}, {
    "text": "South Georgia And The South Sandwich Islands",
    "value": "GS"
}, {"text": "Guatemala", "value": "GT"}, {"text": "Guam", "value": "GU"}, {
    "text": "Guinea Bissau",
    "value": "GW"
}, {"text": "Guyana", "value": "GY"}, {
    "text": "Hong Kong",
    "value": "HK"
}, {"text": "Heard Island And Mcdonald Islands", "value": "HM"}, {
    "text": "Honduras",
    "value": "HN"
}, {"text": "Croatia", "value": "HR"}, {"text": "Haiti", "value": "HT"}, {
    "text": "Hungary",
    "value": "HU"
}, {"text": "Indonesia", "value": "ID"}, {"text": "Ireland", "value": "IE"}, {
    "text": "Israel",
    "value": "IL"
}, {"text": "Isle Of Man", "value": "IM"}, {"text": "India", "value": "IN"}, {
    "text": "British Indian Ocean Territory",
    "value": "IO"
}, {"text": "Iraq", "value": "IQ"}, {"text": "Iran Islamic Republic Of", "value": "IR"}, {
    "text": "Iceland",
    "value": "IS"
}, {"text": "Italy", "value": "IT"}, {"text": "Jersey", "value": "JE"}, {
    "text": "Jamaica",
    "value": "JM"
}, {"text": "Jordan", "value": "JO"}, {"text": "Japan", "value": "JP"}, {
    "text": "Kenya",
    "value": "KE"
}, {"text": "Kyrgyzstan", "value": "KG"}, {"text": "Cambodia", "value": "KH"}, {
    "text": "Kiribati",
    "value": "KI"
}, {"text": "Comoros", "value": "KM"}, {
    "text": "Saint Kitts And Nevis",
    "value": "KN"
}, {"text": "Korea Democratic Peoples Republic Of", "value": "KP"}, {
    "text": "Korea Republic Of",
    "value": "KR"
}, {"text": "Kosovo", "value": "KS"}, {"text": "Kuwait", "value": "KW"}, {
    "text": "Cayman Islands",
    "value": "KY"
}, {"text": "Kazakhstan", "value": "KZ"}, {
    "text": "Lao Peoples Democratic Republic",
    "value": "LA"
}, {"text": "Lebanon", "value": "LB"}, {"text": "Saint Lucia", "value": "LC"}, {
    "text": "Liechtenstein",
    "value": "LI"
}, {"text": "Sri Lanka", "value": "LK"}, {"text": "Liberia", "value": "LR"}, {
    "text": "Lesotho",
    "value": "LS"
}, {"text": "Lithuania", "value": "LT"}, {"text": "Luxembourg", "value": "LU"}, {
    "text": "Latvia",
    "value": "LV"
}, {"text": "Libyan Arab Jamahiriya", "value": "LY"}, {"text": "Morocco", "value": "MA"}, {
    "text": "Monaco",
    "value": "MC"
}, {"text": "Moldova Republic Of", "value": "MD"}, {"text": "Montenegro", "value": "ME"}, {
    "text": "Madagascar",
    "value": "MG"
}, {"text": "Marshall Islands", "value": "MH"}, {"text": "Macedonia", "value": "MK"}, {
    "text": "Mali",
    "value": "ML"
}, {"text": "Myanmar", "value": "MM"}, {"text": "Mongolia", "value": "MN"}, {
    "text": "Macao",
    "value": "MO"
}, {"text": "Northern Mariana Islands", "value": "MP"}, {"text": "Martinique", "value": "MQ"}, {
    "text": "Mauritania",
    "value": "MR"
}, {"text": "Montserrat", "value": "MS"}, {"text": "Malta", "value": "MT"}, {
    "text": "Mauritius",
    "value": "MU"
}, {"text": "Maldives", "value": "MV"}, {"text": "Malawi", "value": "MW"}, {
    "text": "Mexico",
    "value": "MX"
}, {"text": "Malaysia", "value": "MY"}, {"text": "Mozambique", "value": "MZ"}, {
    "text": "Namibia",
    "value": "NA"
}, {"text": "New Caledonia", "value": "NC"}, {"text": "Niger", "value": "NE"}, {
    "text": "Norfolk Island",
    "value": "NF"
}, {"text": "Nigeria", "value": "NG"}, {"text": "Nicaragua", "value": "NI"}, {
    "text": "Netherlands",
    "value": "NL"
}, {"text": "Norway", "value": "NO"}, {"text": "Nepal", "value": "NP"}, {
    "text": "Nauru",
    "value": "NR"
}, {"text": "Niue", "value": "NU"}, {"text": "New Zealand", "value": "NZ"}, {
    "text": "Oman",
    "value": "OM"
}, {"text": "Panama", "value": "PA"}, {"text": "Peru", "value": "PE"}, {
    "text": "French Polynesia",
    "value": "PF"
}, {"text": "Papua New Guinea", "value": "PG"}, {"text": "Philippines", "value": "PH"}, {
    "text": "Pakistan",
    "value": "PK"
}, {"text": "Poland", "value": "PL"}, {"text": "Saint Pierre And Miquelon", "value": "PM"}, {
    "text": "Pitcairn",
    "value": "PN"
}, {"text": "Puerto Rico", "value": "PR"}, {
    "text": "Palestinian Territory Occupied",
    "value": "PS"
}, {"text": "Portugal", "value": "PT"}, {"text": "Palau", "value": "PW"}, {
    "text": "Paraguay",
    "value": "PY"
}, {"text": "Qatar", "value": "QA"}, {"text": "Reunion", "value": "RE"}, {
    "text": "Romania",
    "value": "RO"
}, {"text": "Serbia", "value": "RS"}, {"text": "Russian Federation", "value": "RU"}, {
    "text": "Rwanda",
    "value": "RW"
}, {"text": "Saudi Arabia", "value": "SA"}, {"text": "Solomon Islands", "value": "SB"}, {
    "text": "Seychelles",
    "value": "SC"
}, {"text": "Sudan", "value": "SD"}, {"text": "Sweden", "value": "SE"}, {
    "text": "Singapore",
    "value": "SG"
}, {"text": "Saint Helena", "value": "SH"}, {"text": "Slovenia", "value": "SI"}, {
    "text": "Svalbard And Jan Mayen",
    "value": "SJ"
}, {"text": "Slovakia", "value": "SK"}, {"text": "Sierra Leone", "value": "SL"}, {
    "text": "San Marino",
    "value": "SM"
}, {"text": "Senegal", "value": "SN"}, {"text": "Somalia", "value": "SO"}, {
    "text": "Suriname",
    "value": "SR"
}, {"text": "Sao Tome And Principe", "value": "ST"}, {
    "text": "El Salvador",
    "value": "SV"
}, {"text": "Syrian Arab Republic", "value": "SY"}, {
    "text": "Swaziland",
    "value": "SZ"
}, {"text": "Turks And Caicos Islands", "value": "TC"}, {
    "text": "Chad",
    "value": "TD"
}, {"text": "French Southern Territories", "value": "TF"}, {"text": "Togo", "value": "TG"}, {
    "text": "Thailand",
    "value": "TH"
}, {"text": "Tajikistan", "value": "TJ"}, {"text": "Tokelau", "value": "TK"}, {
    "text": "Timor Leste",
    "value": "TL"
}, {"text": "Turkmenistan", "value": "TM"}, {"text": "Tunisia", "value": "TN"}, {
    "text": "Tonga",
    "value": "TO"
}, {"text": "East Timor", "value": "TP"}, {"text": "Turkey", "value": "TR"}, {
    "text": "Trinidad And Tobago",
    "value": "TT"
}, {"text": "Tuvalu", "value": "TV"}, {
    "text": "Taiwan Province Of China",
    "value": "TW"
}, {"text": "Tanzania United Republic Of", "value": "TZ"}, {"text": "Ukraine", "value": "UA"}, {
    "text": "Uganda",
    "value": "UG"
}, {"text": "United States Minor Outlying Islands", "value": "UM"}, {
    "text": "United States",
    "value": "US"
}, {"text": "Uruguay", "value": "UY"}, {"text": "Uzbekistan", "value": "UZ"}, {
    "text": "Holy See Vatican City State",
    "value": "VA"
}, {"text": "Saint Vincent And The Grenadines", "value": "VC"}, {
    "text": "Venezuela",
    "value": "VE"
}, {"text": "Virgin Islands British", "value": "VG"}, {"text": "Virgin Islands Us", "value": "VI"}, {
    "text": "Vietnam",
    "value": "VN"
}, {"text": "Vanuatu", "value": "VU"}, {"text": "Wallis And Futuna", "value": "WF"}, {
    "text": "Samoa",
    "value": "WS"
}, {"text": "Yemen", "value": "YE"}, {"text": "Mayotte", "value": "YT"}, {
    "text": "Yugoslavia",
    "value": "YU"
}, {"text": "South Africa", "value": "ZA"}, {"text": "Zambia", "value": "ZM"}, {
    "text": "Zaire",
    "value": "ZR"
}, {"text": "Zimbabwe", "value": "ZW"}];

</script>
