import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';

const CodeBlock = ({ children, className }) => {
  const language = className ? className.replace(/language-/, '') : '';
  const code = children.trim();

  return (
    // <Highlight {...defaultProps} code={children} language={language}>
    //   {({ className, style, tokens, getLineProps, getTokenProps }) => (
    //     <pre className={className} style={{ ...style }}>
    //       {tokens.map((line, i) => (
    //         <div key={i} {...getLineProps({ line, key: i })}>
    //           {line.map((token, key) => (
    //             <span key={key} {...getTokenProps({ token, key })} />
    //           ))}
    //         </div>
    //       ))}
    //     </pre>
    //   )}
    // </Highlight>
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
