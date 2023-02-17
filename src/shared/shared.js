const FETCH_DATA = "SET_IS_FETCHING";
const FETCH_DATA_SUCCESS = "SET_IS_FETCHED";
const FETCH_DATA_ERROR = "SET_FETCH_ERROR";
const SET_DATA_PAGE = "SET_CURRENT_PAGE";
const FIELDS_SETTING = "SET_FIELDS_SETTING";
const SET_VISIBLE_FIELDS = "SET_VISIBLE_FIELDS";

export const ACTION_TYPES = {
  FETCH_DATA: FETCH_DATA,
  FETCH_DATA_SUCCESS: FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR: FETCH_DATA_ERROR,
  SET_DATA_PAGE: SET_DATA_PAGE,
  FIELDS_SETTING: FIELDS_SETTING,
  SET_VISIBLE_FIELDS: SET_VISIBLE_FIELDS,
};

export const tablecolumns = [
  {
    name: "name",
    id: 1,
    selector: (row) => row.name,
    omit: false,
  },
  {
    name: "username",
    id: 2,
    selector: (row) => row.username,
    omit: false,
  },
  {
    name: "email",
    id: 3,
    selector: (row) => row.email,
    omit: false,
  },
  {
    name: "address",
    id: 4,
    selector: (row) => row.address,
    omit: false,
  },
  {
    name: "phone",
    id: 5,
    selector: (row) => row.phone,
    omit: false,
  },
  {
    name: "website",
    id: 6,
    selector: (row) => row.website,
    omit: false,
  },
  {
    name: "company",
    id: 7,
    selector: (row) => row.company,
    omit: false,
  },
];

export const SETTINGS_COLUMN_NAMES = {
  ALL_COLUMNS: "Availeble columns",
  SELECTED: "Selected columns",
};

export const defaultVisibleFields = [];
