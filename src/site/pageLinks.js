const pageLinks = {
  authPage: {
    baseUrl: "/auth",
    dynamicUrl: "/auth/:authType",
  },
  dashboardPage: {
    baseUrl: "/dashboard",
    dynamicUrl: "/dashboard",
  },
  surveyPage: {
    baseUrl: "/survey",
    dynamicUrl: "/survey/:projectId",
  },
  reportEditPage: {
    baseUrl: "/report/edit",
    dynamicUrl: "/report/edit/:reportId",
  },
};

export default pageLinks;
