import styles from "./ipoList.module.scss";

const theadList = [
  {
    label: "Company / Issue date",
    value: "companyIssueDate",
  },
  {
    label: "Issue size",
    value: "issueSize",
  },
  {
    label: "Price range",
    value: "priceRange",
  },
  {
    label: "Min invest/qty",
    value: "minInvestQty",
  },
];

const IpoList = () => {
  return (
    <div className={styles.ipoListWrapper}>
      <table>
        <thead>
          <tr>
            {theadList.map(({ label, value }) => {
              return <td key={value}>{label}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IpoList;
