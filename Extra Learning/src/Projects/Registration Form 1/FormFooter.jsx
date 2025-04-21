export const FormFooter = () => {
  return (
    <div className="footer">
      <p className="common-para">
        By creating an account, you are agreeing to our{" "}
        <a href="#" className="tNc" aria-label="Terms and Conditions">
          Terms and Conditions.
        </a>
      </p>
      <input type="submit" value="Sign Up" className="submit-btn" />
    </div>
  );
};
