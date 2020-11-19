/**
 * @file
 * Adds additional features to layout builder page.
 */
(function ($) {
  Drupal.behaviors.wingsuit_layout_builder = {
    attach() {
      $('.layout-builder').once('wingsuit-layout-builder').each(function () {
        const that = $(this);
        const layout_builder_form = $(this).siblings('.layout-builder-form-fixed');
        layout_builder_form.find('#layout-overview-button').click(function () {
          that.find('> a').click();
        });
        layout_builder_form.find('#edit-moderation-state-toggler').change(function () {
          const moderation_visibility = this.checked ? 'block' : 'none';
          layout_builder_form.find('.field--name-moderation-state').css('display', moderation_visibility);
        });
      });
    },
  };
})(jQuery);
