const FieldTab = () => {
  return (
    <>
      <div>This explains that fields are structured data and how that is useful. </div>
      <hr />
      <div
        className="js-form-item form-item js-form-type-textfield form-type--textfield js-form-item-title-0-value form-item--title-0-value">
        <label htmlFor="edit-title-0-value" className="form-item__label js-form-required form-required">Title</label>
        <input
          className="js-text-full text-full form-text required form-element form-element--type-text form-element--api-textfield"
          data-drupal-selector="edit-title-0-value" type="text" id="edit-title-0-value" name="title[0][value]"
          placeholder="" required="required" aria-required="true"/>
      </div>

      <div className="js-text-full text-full js-form-item form-item" data-media-embed-host-entity-langcode="en"
           data-drupal-selector="edit-body-0">
        <div className="js-text-summary-wrapper text-summary-wrapper"></div>
        <div
          className="js-form-item form-item js-form-type-textarea form-type--textarea js-form-item-body-0-value form-item--body-0-value">
          <label htmlFor="edit-body-0-value" className="form-item__label">Body</label>
          <div className="form-textarea-wrapper">
        <textarea
          className="js-text-full text-full form-textarea resize-vertical form-element form-element--type-textarea form-element--api-textarea"
          data-media-embed-host-entity-langcode="en" data-drupal-selector="edit-body-0-value"
          data-editor-value-is-changed="false"
          id="edit-body-0-value" name="body[0][value]" rows="9" placeholder="" style={{width: '100%'}}
          data-editor-active-text-format="cohesion"
          defaultValue='Lorem ipsum. Yap dap rap lap.'
          data-ckeditor5-id="6837659"></textarea>
          </div>

        </div>
        <div className="js-filter-wrapper clearfix js-form-wrapper form-wrapper filter-wrapper"
             data-drupal-selector="edit-body-0-format" id="edit-body-0-format">
          <div data-drupal-selector="edit-body-0-format-help" id="edit-body-0-format-help"
               className="js-form-wrapper form-wrapper filter-help"><a href="/filter/tips" target="_blank"
                                                                       data-drupal-selector="edit-body-0-format-help-about"
                                                                       id="edit-body-0-format-help-about">About text
            formats</a>
          </div>
          <div
            className="form-item--editor-format js-form-item form-item js-form-type-select form-type--select js-form-item-body-0-format form-item--body-0-format">
            <label htmlFor="edit-body-0-format--2" className="form-item__label">Text format</label>
            <select
              className="js-filter-list editor form-element--extrasmall form-element--editor-format form-select form-element form-element--type-select"
              data-drupal-selector="edit-body-0-format" data-editor-for="edit-body-0-value" id="edit-body-0-format--2"
              name="body[0][format]" data-once="editor">
              <option value="cohesion" defaultValue="selected">Site Studio</option>
              <option value="basic_html">Basic HTML</option>
              <option value="full_html">Full HTML</option>
            </select>
          </div>
          <div className="js-filter-guidelines js-form-wrapper form-wrapper filter-guidelines"
               data-drupal-selector="edit-body-0-format-guidelines" id="edit-body-0-format-guidelines"
               data-once="filter-guidelines"></div>
        </div>

      </div>
      <details
        className="path-form accordion__item js-form-wrapper form-wrapper claro-details claro-details--accordion-item"
        data-drupal-selector="edit-path-0" id="edit-path-0" data-once="details">
        <summary role="button" aria-controls="edit-path-0" aria-expanded="false"
                 className="claro-details__summary claro-details__summary--accordion-item">URL alias<span
          className="claro-details__summary-summary">Automatic alias</span></summary>
        <div className="claro-details__wrapper details-wrapper claro-details__wrapper--accordion-item">
          <div className="claro-details__content claro-details__content--accordion-item">

            <div
              className="js-form-item form-item js-form-type-checkbox form-type--checkbox form-type--boolean js-form-item-path-0-pathauto form-item--path-0-pathauto">
              <input data-drupal-selector="edit-path-0-pathauto" aria-describedby="edit-path-0-pathauto--description"
                     type="checkbox" id="edit-path-0-pathauto" name="path[0][pathauto]" value="1" defaultChecked="true"
                     className="form-checkbox form-boolean form-boolean--type-checkbox"/>
              <label htmlFor="edit-path-0-pathauto" className="form-item__label option">Generate automatic URL
                alias</label>
              <div id="edit-path-0-pathauto--description" className="form-item__description">
                Uncheck this to create a custom alias below. <a href="/admin/config/search/path/patterns">Configure URL
                alias patterns.</a>
              </div>
            </div>
            <div
              className="js-form-item form-item js-form-type-textfield form-type--textfield js-form-item-path-0-alias form-item--path-0-alias form-disabled">
              <label htmlFor="edit-path-0-alias" className="form-item__label">URL alias</label>
              <input data-drupal-selector="edit-path-0-alias" aria-describedby="edit-path-0-alias--description"
                     type="text" id="edit-path-0-alias" name="path[0][alias]" value="/some-page" size="60" maxLength="255"
                     className="form-text form-element form-element--type-text form-element--api-textfield"
                     data-drupal-states="{&quot;disabled&quot;:{&quot;input[name=\u0022path[0][pathauto]\u0022]&quot;:{&quot;checked&quot;:true}}}"
                     disabled=""/>
              <div id="edit-path-0-alias--description" className="form-item__description">
                Specify an alternative path by which this data can be accessed. For example, type "/about" when writing
                an about page.
              </div>
            </div>
          </div>
        </div>
      </details>
      <details
        className="node-form-author accordion__item js-form-wrapper form-wrapper claro-details claro-details--accordion-item"
        data-drupal-selector="edit-author" id="edit-author" data-once="details">
        <summary role="button" aria-controls="edit-author" aria-expanded="false"
                 className="claro-details__summary claro-details__summary--accordion-item">Authoring information<span
          className="claro-details__summary-summary">By admin (1) on 2024-03-15</span></summary>
        <div className="claro-details__wrapper details-wrapper claro-details__wrapper--accordion-item">
          <div className="claro-details__content claro-details__content--accordion-item">

            <div
              className="field--type-entity-reference field--name-uid field--widget-entity-reference-autocomplete js-form-wrapper form-wrapper"
              data-drupal-selector="edit-uid-wrapper" id="edit-uid-wrapper">
              <div
                className="js-form-item form-item js-form-type-entity-autocomplete form-type--entity-autocomplete js-form-item-uid-0-target-id form-item--uid-0-target-id">
                <label htmlFor="edit-uid-0-target-id" className="form-item__label">Authored by</label>
                <div className="claro-autocomplete"><input data-drupal-selector="edit-uid-0-target-id"
                                                           aria-describedby="edit-uid-0-target-id--description"
                                                           className="form-autocomplete form-text form-element form-element--type-text form-element--api-entity-autocomplete ui-autocomplete-input"
                                                           data-autocomplete-path="/entity_reference_autocomplete/user/default/qOpstW4_5CRtTErBN-ducFyXqTQ7mgB3dim7EuzFnaQ?entity_type=node&amp;entity_id=2"
                                                           type="text" id="edit-uid-0-target-id"
                                                           name="uid[0][target_id]" value="admin (1)" size="60"
                                                           maxLength="1024" placeholder=""
                                                           data-once="autocomplete claroAutoComplete"
                                                           autoComplete="off"/>
                  <div className="claro-autocomplete__message hidden"
                       data-drupal-selector="autocomplete-message">Loading…
                  </div>
                </div>
                <div id="edit-uid-0-target-id--description" className="form-item__description">
                  The username of the content author.
                </div>
              </div>

            </div>
            <div
              className="field--type-created field--name-created field--widget-datetime-timestamp js-form-wrapper form-wrapper"
              data-drupal-selector="edit-created-wrapper" id="edit-created-wrapper">
              <div className="form-item form-datetime-wrapper">
                <h4 className="form-item__label">Authored on</h4>
                <div id="edit-created-0-value" data-drupal-field-elements="date-time" className="form-items-inline">
                  <div
                    className="js-form-item form-item js-form-type-date form-type--date js-form-item-created-0-value-date form-item--created-0-value-date form-item--no-label">
                    <label htmlFor="edit-created-0-value-date" className="form-item__label visually-hidden">Date</label>
                    <input data-drupal-selector="edit-created-0-value-date"
                           aria-describedby="edit-created-0-value--description" type="date" min="1902-01-01"
                           max="2037-12-31" placeholder="YYYY-MM-DD"
                           data-help="Enter the date using the format YYYY-MM-DD (e.g., 2024-03-18)."
                           id="edit-created-0-value-date" name="created[0][value][date]" value="2024-03-15" size="12"
                           className="form-date form-element form-element--type-date form-element--api-date"/>
                  </div>
                  <div
                    className="js-form-item form-item js-form-type-date form-type--date js-form-item-created-0-value-time form-item--created-0-value-time form-item--no-label">
                    <label htmlFor="edit-created-0-value-time" className="form-item__label visually-hidden">Time</label>
                    <input data-drupal-selector="edit-created-0-value-time"
                           aria-describedby="edit-created-0-value--description" type="time" step="1"
                           placeholder="hh:mm:ss" data-help="Enter the time using the format hh:mm:ss (e.g., 20:16:24)."
                           id="edit-created-0-value-time" name="created[0][value][time]" value="19:30:41" size="12"
                           className="form-time form-element form-element--type-time form-element--api-date"/>
                  </div>

                </div>

                <div id="edit-created-0-value--description" data-drupal-field-elements="description"
                     className="form-item__description">
                  The date and time that the content was created.
                </div>
              </div>

            </div>
          </div>
        </div>
      </details>
    </>
  )
}

export default FieldTab;
