import React from 'react';

export const FlexBox = (props) => {
  const flex = `${props.flexGrow || '0'} ${props.flexShrink || '1'} ${props.flexBasis || 'auto'}`;

  return (
    <div
      className={props.className}
      style={{
        display: 'flex',
        position: 'relative',
        flex: { flex },
        flexDirection: props.flexDirection || 'row',
        flexWrap: props.flexWrap || 'wrap',
        alignItems: props.alignItems || 'stretch',
        alignContent: props.alignContent || 'stretch',
        justifyContent: props.justifyContent || 'center',
        margin: props.margin || '0',
        padding: props.padding || '0',
        width: props.width || 'auto',
        height: props.height || 'auto',
        maxWidth: props.maxWidth || 'none',
      }}
    >
      {props.children || ''}
    </div>
  );
};
