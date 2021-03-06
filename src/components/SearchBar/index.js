import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Input, Button } from 'semantic-ui-react';

import {
  inputCityChange, submit, chooseCountry, submitCityInFrance,
} from '../../store/actions';
import '../../styles/searchbar.scss';

const SearchBar = ({
  loading,
  city,
  submitCitySearch,
  onInputChange,
  messageError,
  messageSuccess,
  selectZone,
  choose,
  submitCityInFrance,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (choose === 'fr') {
      submitCityInFrance();
      console.log(submitCityInFrance);
    }
    else {
      submitCitySearch();
      console.log(submitCitySearch);
    }
  };
  const handleCountry = (evt) => {
    const worldZone = evt.target.value;
    selectZone(worldZone);
    console.log(`j'ai choisi ---${evt.target.value}---`);
  };
  return (
    <div className="container-searchbar">
      <form
        className="form-input"
        action="GET"
        onSubmit={handleSubmit}
      >
        {messageError && (
          <div>message: {messageError}</div>
        )}
        {messageSuccess && (
          <div>message: {messageSuccess}</div>
        )}
        <select
          className="select"
          name="country"
          value={choose}
          onChange={handleCountry}
        >
          <option
            className="select-country"
            selected
          >---choisissez la zone---
          </option>
          <option
            onChange={handleCountry}
            name="france"
            value="fr"
            defaultChecked
          >France
          </option>
          <option
            onChange={handleCountry}
            name="monde"
            value="world"
          >Monde
          </option>
        </select>

        <Input
          className="search-bar"
          placeholder="Nom de la ville"
          type="text"
          value={city}
          onChange={(evt) => {
            onInputChange(evt.target.value);
          }}
          icon="search"
          focus

        />
        {
          loading && (
            <Button
              type="submit"
              className="container-button"
              loading
            />
          )
        }

        {
          !loading && (
            <Button
              className="container-button"
              type="submit"
            >Rechercher la ville
            </Button>
          )
        }
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  loading: propTypes.bool.isRequired,
  city: propTypes.string.isRequired,
  submitCitySearch: propTypes.func.isRequired,
  onInputChange: propTypes.func.isRequired,
  messageError: propTypes.string.isRequired,
  messageSuccess: propTypes.string.isRequired,
  selectZone: propTypes.func.isRequired,
  choose: propTypes.string.isRequired,
  submitCityInFrance: propTypes.func.isRequired,

};

const mapState = (state) => ({
  city: state.user.city,
  cityZipCode: state.user.cityZipCode,
  units: state.user.units,
  data: state.user.data,
  loading: state.user.loading,
  choose: state.user.choose,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (changeInput) => {
    dispatch(inputCityChange(changeInput));
  },
  submitCitySearch: () => {
    dispatch(submit());
  },
  submitCityInFrance: () => {
    dispatch(submitCityInFrance());
  },
  selectZone: (selectZone) => {
    dispatch(chooseCountry(selectZone));
  },
});

export default connect(mapState, mapDispatch)(SearchBar);
