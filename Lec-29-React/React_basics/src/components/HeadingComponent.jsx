function HeadingComponent(props) {
  const headingString = props.headingString;
  const index = props.headingIndex;
  return (
    <h1>
      {index} {headingString}
    </h1>
  );
}

export default HeadingComponent