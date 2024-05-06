import React from "react";
import Caroussel from "../components/caroussel";
import Layout from "../components/layout";
import workingCuate from "../assets/Working-cuate.svg";
import ImageWithText from "../components/imageWithText";
import thinking from "../assets/Design-thinking-pana.svg";
import certification from "../assets/Certification-rafiki.svg";
import ImageSideText from "../components/imageWithSideText";

function Home() {
  return (
    <Layout>
      <Caroussel />
      <div className="container-md text-center overflow-auto">
        <h2>This is gonna be home page</h2>
        <p className="text-break text-danger">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
      </div>
      <div className="container">
        <div class="row align-items-center">
          <div class="col">
            <ImageWithText
              imageUrl={thinking}
              title="Primeiro Emprego"
              link="/about"
            />
          </div>
          <div class="col">
            <ImageWithText
              imageUrl={workingCuate}
              title="Desempregados a longo prazo"
              link=""
            />
          </div>
          <div class="col">
            <ImageWithText
              imageUrl={certification}
              title="Estágio professional"
              link="/home"
            />
          </div>
        </div>
      </div>
      <ImageSideText
        imageUrl={certification}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry."
        alt="ccertification"
        reverse={false}
      />
      <ImageSideText
        imageUrl={certification}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry."
        alt="ccertification"
        reverse={true}
      />
      <ImageSideText
        imageUrl={certification}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry."
        alt="ccertification"
        reverse={false}
      />
    </Layout>
  );
}

export default Home;
