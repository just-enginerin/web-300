/**
Title: theme.js
Author: Professor Krasso
Date: 1/8/2023
Modified By: Erin Brady
Description: Functionality to update the site's theme styles.
*/

/**
 * Function to set the default theme to light if one has not been set in the browsers localStorage
*/
const setDefaultTheme = () => {
  const theme = localStorage.getItem("mode") || "light-theme";
  const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
  const iconText = localStorage.getItem("iconText") || "Light Mode";

  document.body.classList.value = theme;
  document.getElementById("icon-mode").classList.add(iconMode);
  document.getElementById("icon-text").innerHTML = iconText;
}

/**
 * Set the HTML body to the user's selected theme. If one has not been selected, set the theme to light-theme
*/
const setSelectedTheme = () => {
  document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}

/**
 * Function to switch the users selected website theme
 * @param x - this instance
*/
const toggleMode = (x) => {
  let colorTheme = document.body.classList; // get the body's CSS class
  let iconMode = x.classList; // get the current classes assigned to the triggered button

  // If the current body class is set to the light-theme, update the user's preference to the dark-theme in the browsers local storage.
  if (colorTheme.value === "light-theme") {
    localStorage.clear();
    localStorage.setItem("mode", "dark-theme");
    localStorage.setItem("iconMode", "fa-toggle-on");
    localStorage.setItem("iconText", "Dark Mode");
  }
  
  // If the current body class is set to the dark-theme, update the user's preference to the light-theme in the browsers local storage.
  else {
    localStorage.clear();
    localStorage.setItem("mode", "light-theme");
    localStorage.setItem("iconMode", "fa-toggle-off");
    localStorage.setItem("iconText", "Light Mode");
  }

  // Apply the updated selection to the HTML page elements
  colorTheme.value = localStorage.getItem("mode");
  iconMode.value = `fa ${localStorage.getItem("iconMode")} pull-right`;
  document.getElementById("icon-text").innerHTML = localStorage.getItem("iconText");
}
