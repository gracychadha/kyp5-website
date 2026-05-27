import React from "react";
import axios from "axios";
function TestGridComponent() {
  const [tests, setTests] = React.useState([]);
  React.useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BASE_URL + "/tests",
        );
        if (response.data.success) {
          setTests(response.data.data.data);
        }
      } catch (error) {
        console.error("Error fetching tests:", error);
      }
    };
    fetchTests();
  }, []);
  return (
    <>
      <div className="rts-section-gap rts-blog-area">
        <div className="container ">
          <div className="row g-5 ">
            {tests.map((test) => (
              <div className="col-lg-4" key={test.id}>
                <div className="single-blog-style-one">
                  <a href={`/test?testId=${test.id}`} className="thumbnail">
                    <img src="assets/images/test-kyp5.png" alt="blog" />
                  </a>

                  <a href={`/test?testId=${test.id}`}>
                    <h5 className="title">{test.title}</h5>
                  </a>

                  <a
                    className="rts-btn btn-primary me-2"
                    href={`/test?testId=${test.id}`}
                  >
                    Start test
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TestGridComponent;
