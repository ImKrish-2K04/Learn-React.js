function firstActivity({ userName, textColor }) {
  const styles = {
    color: textColor,
    fontSize: 30 + "px",
  };

  return <p style={styles}>Hello {userName}</p>;
}

export default firstActivity;
