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
	const { fallbackCurrentYear, align, showStartingYear, startingYear, showIcon, showTM, showTitleFirst } = attributes;
	
	const blockProps = useBlockProps.save({
		className: align ? `has-text-align-${align}` : ''
	} );

	// If there is no fallbackCurrentYear, which could happen if the block
	// is loaded from a template/pattern, return null. In this case, block
	// rendering will be handled by the render.php file.
	if ( ! fallbackCurrentYear ) {
		return null;
	}

	let displayDate;

	// Display the starting year as well if supplied by the user.
	if ( showStartingYear && startingYear ) {
		displayDate = startingYear + '–' + fallbackCurrentYear;
	} else {
		displayDate = fallbackCurrentYear;
	}

	const innerBlocksProps = useInnerBlocksProps.save( { 
		className: 'wa-copyright-inner-content' 
	} );

	//console.log(innerBlocksProps)

	const date = <span>
		{ showIcon && '© ' }
		{ showTM && <small>™ </small> }
		{ displayDate }
	</span>

	return <div { ...blockProps }>
		{ !showTitleFirst ? date : false }
		<span {...innerBlocksProps} />
		{ showTitleFirst ? date : false }
	</div>
}