/**
 * External dependencies
 */
import clsx from 'clsx';

import { useBlockProps, MediaPlaceholder, InspectorControls, BlockControls, AlignmentToolbar,  MediaReplaceFlow } from '@wordpress/block-editor';
import { PanelBody, SelectControl, Spinner } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, attributes: { mediaUrl, linkUrl, mediaId, titleAlignment }, setAttributes }) {
  //console.log(attributes)

  const onSelectMedia = (media) => {
    setAttributes({
      mediaUrl: media.url,
      mediaId: media.id,
    });
  };

  // Fetch all pages to populate the dropdown
  const { pages, hasResolved } = useSelect((select) => {
    const query = { 
      per_page: -1, 
      status: 'publish',
          _fields: 'id,title,link,status' // Performance: only fetch what we need
        };

        const selector = select(coreStore);

        return {
          pages: selector.getEntityRecords('postType', 'page', query),
          hasResolved: selector.hasFinishedResolution('getEntityRecords', ['postType', 'page', query]),
        };
      }, []);

  // Format pages for the SelectControl options
  const options = [
    { label: __('Select a page...', 'text-domain'), value: '' }
  ];

  if (pages) {
    pages.forEach((page) => {
      options.push({
        label: page.title.rendered,
                value: page.link, // Store the full URL
              });
    });
  }

  // Find the title of the currently selected link for the preview
  const selectedPage = pages?.find(p => p.link === linkUrl);
  const displayTitle = selectedPage ? selectedPage.title.rendered : __('No Page Selected', 'wa');

  return (
    <div { ...useBlockProps() }>
      <BlockControls>
        <AlignmentToolbar
          value={ titleAlignment }
          onChange={ ( val ) => setAttributes( { titleAlignment: val } ) }
        />
        { mediaUrl && (
          <BlockControls group="other">
            <MediaReplaceFlow
              mediaId={ mediaId }
              mediaUrl={ mediaUrl }
              allowedTypes={ [ 'image' ] }
              accept="image/*"
              onSelect={ onSelectMedia }
              name={ __( 'Replace Image', 'wa' ) }
            />
          </BlockControls>
        ) }
      </BlockControls>

      <InspectorControls>
        <PanelBody title={ __( 'Tile Settings' ) }>
          { ! hasResolved ? (
            <Spinner />
            ) : (
            <SelectControl
              label={ __( 'Select Link Page' ) }
              value={ linkUrl }
              options={ options }
              onChange={ (val) => setAttributes({ linkUrl: val }) }
            />
            )
          }
        <SelectControl
          label="Title Alignment"
          value={ titleAlignment }
          options={ [
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
            ] }
            onChange={ ( val ) => setAttributes( { titleAlignment: val } ) }
          />
        </PanelBody>
      </InspectorControls>

      <div className={`wa-image-link-tile alignment-${titleAlignment}`}>
        { ! mediaUrl ? (
          <MediaPlaceholder
            onSelect={ ( media ) => setAttributes( { mediaUrl: media.url, mediaId: media.id } ) }
            allowedTypes={ [ 'image' ] }
            labels={{ title: 'Tile Image' }}
            />
            ) : (
            <>
              <img src={ mediaUrl } />

              <div className="label">
                <h3>{ displayTitle }</h3>
              </div>
            </>
        ) }
      </div>
    </div>
  );
}