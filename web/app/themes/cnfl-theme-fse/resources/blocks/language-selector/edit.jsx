import { registerBlockType } from '@wordpress/blocks'
import { InnerBlocks, InspectorControls } from '@wordpress/blockEditor'
import { SelectControl, PanelBody } from '@wordpress/components'

export default function Edit( props ) {
  const { 
    attributes, 
    attributes: { language },
    setAttributes, 
    clientId,
    className,
  } = props

  const isEnglish = language === 'en';

  console.log(attributes)
  return (
      <wa-button-group className="wa-lang-selector-editor">
      <wa-button variant={ language === 'en' ? 'primary' : 'default' }>
        EN
      </wa-button>
      <wa-button variant={ language === 'fr' ? 'primary' : 'default' }>
        FR
      </wa-button>
      </wa-button-group>
  );
}
