/**
 * External dependencies
 */
import clsx from 'clsx';

import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { mediaUrl, linkUrl, titleAlignment } = attributes;
  //console.log(attributes)
  
  // If no image is selected, don't render anything (or it will be a blank box)
  //if (!mediaUrl) return null;

  let blockProps = useBlockProps.save( { 
    className: clsx(
      'wa-image-link-tile',
      `alignment-${titleAlignment}`
    )
  } )

  return (
      <div { ...blockProps }>
          <a href={ linkUrl }>
              <img src={ mediaUrl } className="tile-bg" alt="" />
              <div className="tile-overlay"></div>
              <div className="label">
                  {/* This placeholder is CRITICAL for the PHP filter */}
                  <h3>DYNAMIC_TITLE_HOLDER</h3>
              </div>
          </a>
      </div>
  );
}