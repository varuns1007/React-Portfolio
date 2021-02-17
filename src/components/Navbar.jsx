import React from "react";
import {
  AppBar,
  Tab,
  Tabs,
} from "@material-ui/core";
import { Info, Assessment, PermContactCalendar } from "@material-ui/icons";
import $ from "jquery";


const Navbar = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
      setSelectedTab(newValue);
    };
    return (
      <div>
        <AppBar position="sticky">
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            aria-label="simple tabs example"
            centered
          >
            <Tab
              label="About Me"
              onClick={() =>
                $("html,body").animate(
                  {
                    scrollTop: $("#aboutDiv").offset().top,
                  },
                  "slow"
                )
              }
              icon={<Info />}
            />
            <Tab
              label="Skills"
              onClick={() =>
                $("html,body").animate(
                  {
                    scrollTop: $("#skillsDiv").offset().top,
                  },
                  "slow"
                )
              }
              icon={<Assessment />}
            />
            <Tab
              label="Contact"
              onClick={() =>
                $("html,body").animate(
                  {
                    scrollTop: $("#contactDiv").offset().top,
                  },
                  "slow"
                )
              }
              icon={<PermContactCalendar />}
            />
          </Tabs>
        </AppBar>
      </div>
    );
}

export default Navbar;