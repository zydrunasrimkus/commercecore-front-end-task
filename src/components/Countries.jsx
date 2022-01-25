import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "" };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  render() {
    const { country, region } = this.state;
    return (
      <div className="md:flex">
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)}
          defaultOptionLabel="Select Country*"
          className="block h-[48px] border border-gray4 rounded-[3px] w-full  indent-[12px] mb-[16px] text-gray4 focus:outline-gray4 md:min-w-[115px]"
        />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)}
          defaultOptionLabel="Select Region*"
          className="block h-[48px] border border-gray4 rounded-[3px] w-full indent-[12px] mb-[16px] text-gray4 md:mx-[10px] focus:outline-gray4 md:min-w-[100px]"
        />
      </div>
    );
  }
}
export default Countries;
