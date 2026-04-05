/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param {Object} props            Properties passed to the function.
 * @param {Object} props.attributes Available block attributes.
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {
  const { language } = attributes;
  
  const blockProps = useBlockProps.save({
    className: clsx(
      'wa-lang',
      //align ? `has-text-align-${align}` : '',
      `lang-${ language }`,
    ),
  } );

  const innerBlocksProps = useInnerBlocksProps.save( { 
    className: 'wa-lang-inner-content',
  } );

  return <div { ...blockProps }>
    <span {...innerBlocksProps} />
  </div>
}