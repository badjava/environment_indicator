(function ($) {

"use strict";

Drupal.behaviors.environmentIndicatorToolbar = {
  attach: function (context, settings) {
    if (typeof(Drupal.settings.environment_indicator) != 'undefined') {
      var $name = $('<div>').addClass('environment-indicator-name-wrapper').html(Drupal.settings.environment_indicator['environment-indicator-name']);
      $('#toolbar-administration', context).once('environment_indicator').prepend($name);
      $('#toolbar-administration', context).css('background-color', Drupal.settings.environment_indicator['toolbar-color']);
      $('#toolbar-administration .bar', context).css('background-color', changeColor(Drupal.settings.environment_indicator['toolbar-color'], 0.15, true));
    };
  }
};
  
  // Drupal.behaviors.environment_indicatorAdminMenu = {
  //   attach: function (context, settings) {
  //     if (typeof(Drupal.admin) != 'undefined') {
  //       // Add the restyling behavior to the admin menu behaviors.
  //       Drupal.admin.behaviors['environment_indicator'] = function (context, settings) {
  //         $('#admin-menu, #admin-menu-wrapper', context).css('background-color', Drupal.settings.environment_indicator['toolbar-color']);
  //         $('#admin-menu .bar', context).css('background-color', changeColor(Drupal.settings.environment_indicator['toolbar-color'], 0.15, true));
  //         $('#admin-menu .bar ul li:not(.environment-switcher) a', context).css('background-color', Drupal.settings.environment_indicator['toolbar-color']);
  //       };
  //     };
  //   }
  // };
  // 
  // Drupal.behaviors.environment_indicatorSwitcher = {
  //   attach: function (context, settings) {
  //     $('#environment-indicator .environment-indicator-name, #toolbar-administration .environment-indicator-name-wrapper', context).live('click', function () {
  //       $('#environment-indicator .bar, #toolbar-administration .bar', context).slideToggle('fast');
  //     });
  //   }
  // }
  // 
/**
 * Add the farbtastic tie-in.
 */
Drupal.behaviors.environmentIndicatorAdmin = {
  attach: function (context) {
    if (typeof Drupal.color != 'undefined') {
      var $placeholder = $('#environment-indicator-color-picker');
      if ($placeholder.length) {
        Drupal.settings.environment_indicator_color_picker = $placeholder.farbtastic('#environment-indicator-form #edit-color');        
      };
    };
  }
};

})(jQuery);