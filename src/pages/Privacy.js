import React from "react";
import { Link } from "react-router-dom";

const Privacy = ({ t }) => {
  const {
    title,
    subTitle1,
    subTitle2,
    generalInfo,
    dataController,
    dataProtectionOfficier,
    typesOfProcessing,
    rightsData,
  } = t("privacy");
  return (
    <div className="font-light">
      <p className="uppercase text-3xl md:text-5xl text-center my-3">{title}</p>
      <p className="uppercase text-xl md:text-3xl text-center my-3">
        {subTitle1}
      </p>
      <p className="uppercase md:text-xl text-center my-3">{subTitle2}</p>
      <div className="general-info">
        <p className="uppercase text-2xl md:text-4xl mt-2 mb-5 font-medium">
          {generalInfo.title}
        </p>
        <p>
          {generalInfo.text.t1}
          <span className="font-bold">{generalInfo.text.b1}</span>”
          {generalInfo.text.t2}
          <span className="font-bold">{generalInfo.text.b2}</span>
          {generalInfo.text.t3}
        </p>
      </div>
      <div className="data-controller mt-4">
        <p className="uppercase text-2xl md:text-4xl mt-2 mb-5 font-medium">
          {dataController.title}
        </p>
        <p>
          {dataController.text}
          <a href="mailto:info@lespromesses.com">info@lespromesses.com</a>
        </p>
      </div>

      <div className="data-protection-officier mt-4">
        <p className="uppercase text-2xl md:text-4xl mt-2 mb-5 font-medium">
          {dataProtectionOfficier.title}
        </p>
        <p>{dataProtectionOfficier.text}</p>
      </div>
      <div className="types-of-processing mt-4">
        <p className="uppercase text-2xl md:text-4xl mt-2 mb-5 font-medium">
          {typesOfProcessing.title}
        </p>
        <div className="mt-3 types-of-processing-contact-request-data">
          <p className="uppercase text-xl">
            {typesOfProcessing.contactRequestData.title}
          </p>
          <p>{typesOfProcessing.contactRequestData.description}</p>
          <ul className="ml-3 md:ml-5">
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {typesOfProcessing.contactRequestData.itemize.item1.title}
              </span>
              {typesOfProcessing.contactRequestData.itemize.item1.description}
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {typesOfProcessing.contactRequestData.itemize.item2.title}
              </span>
              <ul className="ml-3 md:ml-5">
                <li className="list-disc my-1">
                  {
                    typesOfProcessing.contactRequestData.itemize.item2
                      .subItemize.subItem1
                  }
                </li>
                <li className="list-disc my-1">
                  {
                    typesOfProcessing.contactRequestData.itemize.item2
                      .subItemize.subItem2
                  }
                </li>
                <li className="list-disc my-1">
                  {
                    typesOfProcessing.contactRequestData.itemize.item2
                      .subItemize.subItem3
                  }
                </li>
              </ul>
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {typesOfProcessing.contactRequestData.itemize.item3.title}
              </span>
              {typesOfProcessing.contactRequestData.itemize.item3.description}
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {typesOfProcessing.contactRequestData.itemize.item4.title}
              </span>
              {typesOfProcessing.contactRequestData.itemize.item4.description}
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {typesOfProcessing.contactRequestData.itemize.item5.title}
              </span>
              {typesOfProcessing.contactRequestData.itemize.item5.description}
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {typesOfProcessing.contactRequestData.itemize.item6.title}
              </span>
              {typesOfProcessing.contactRequestData.itemize.item6.description}
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {typesOfProcessing.contactRequestData.itemize.item7.title}
              </span>
              {typesOfProcessing.contactRequestData.itemize.item7.description}
            </li>
          </ul>
        </div>
        <div className="mt-3 types-of-processing-contact-customers-suppliers-contact-persons">
          <p className="uppercase text-xl">
            {typesOfProcessing.contactCustomersSuppliers.title}
          </p>
          <p>{typesOfProcessing.contactCustomersSuppliers.description}</p>
          <ul className="ml-3 md:ml-5">
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {
                  typesOfProcessing.contactCustomersSuppliers.itemize.item1
                    .title
                }
              </span>
              {
                typesOfProcessing.contactCustomersSuppliers.itemize.item1
                  .description
              }
              <ul className="ml-3 md:ml-5">
                <li className="list-disc my-1">
                  {
                    typesOfProcessing.contactCustomersSuppliers.itemize.item1
                      .subItemize.subItem1
                  }
                </li>
                <li className="list-disc my-1">
                  {
                    typesOfProcessing.contactCustomersSuppliers.itemize.item1
                      .subItemize.subItem2
                  }
                </li>
                <li className="list-disc my-1">
                  {
                    typesOfProcessing.contactCustomersSuppliers.itemize.item1
                      .subItemize.subItem3
                  }
                </li>
                <li className="list-disc my-1">
                  {
                    typesOfProcessing.contactCustomersSuppliers.itemize.item1
                      .subItemize.subItem4
                  }
                </li>
                <li className="list-disc my-1">
                  {
                    typesOfProcessing.contactCustomersSuppliers.itemize.item1
                      .subItemize.subItem5
                  }
                </li>
              </ul>
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {
                  typesOfProcessing.contactCustomersSuppliers.itemize.item2
                    .title
                }
              </span>
              <ul className="ml-3 md:ml-5">
                <li className="list-disc my-1">
                  {
                    typesOfProcessing.contactCustomersSuppliers.itemize.item2
                      .subItemize.subItem1
                  }
                </li>
                <li className="list-disc my-1">
                  {
                    typesOfProcessing.contactCustomersSuppliers.itemize.item2
                      .subItemize.subItem2
                  }
                </li>
                <li className="list-disc my-1">
                  {
                    typesOfProcessing.contactCustomersSuppliers.itemize.item2
                      .subItemize.subItem3
                  }
                </li>
                <li className="list-disc my-1">
                  {
                    typesOfProcessing.contactCustomersSuppliers.itemize.item2
                      .subItemize.subItem4
                  }
                </li>
              </ul>
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {
                  typesOfProcessing.contactCustomersSuppliers.itemize.item3
                    .title
                }
              </span>
              {
                typesOfProcessing.contactCustomersSuppliers.itemize.item3
                  .description
              }
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {
                  typesOfProcessing.contactCustomersSuppliers.itemize.item4
                    .title
                }
              </span>
              {
                typesOfProcessing.contactCustomersSuppliers.itemize.item4
                  .description
              }
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {
                  typesOfProcessing.contactCustomersSuppliers.itemize.item5
                    .title
                }
              </span>
              {
                typesOfProcessing.contactCustomersSuppliers.itemize.item5
                  .description
              }
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {
                  typesOfProcessing.contactCustomersSuppliers.itemize.item6
                    .title
                }
              </span>
              {
                typesOfProcessing.contactCustomersSuppliers.itemize.item6
                  .description
              }
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {
                  typesOfProcessing.contactCustomersSuppliers.itemize.item7
                    .title
                }
              </span>
              {
                typesOfProcessing.contactCustomersSuppliers.itemize.item7
                  .description
              }
            </li>
          </ul>
        </div>
        <div className="mt-3 types-of-processing-navigation-data">
          <p className="uppercase text-xl">
            {typesOfProcessing.navigationData.title}
          </p>
          <p>{typesOfProcessing.navigationData.description}</p>
          <ul className="ml-3 md:ml-5">
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {typesOfProcessing.navigationData.itemize.item1.title}
              </span>
              {typesOfProcessing.navigationData.itemize.item1.description}
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {typesOfProcessing.navigationData.itemize.item2.title}
              </span>
              {typesOfProcessing.navigationData.itemize.item2.description}
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {typesOfProcessing.navigationData.itemize.item3.title}
              </span>
              {typesOfProcessing.navigationData.itemize.item3.description}
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {typesOfProcessing.navigationData.itemize.item4.title}
              </span>
              {typesOfProcessing.navigationData.itemize.item4.description}
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {typesOfProcessing.navigationData.itemize.item5.title}
              </span>
              {typesOfProcessing.navigationData.itemize.item5.description}
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                {typesOfProcessing.navigationData.itemize.item6.title}
              </span>
              {typesOfProcessing.navigationData.itemize.item6.description}
            </li>
          </ul>
        </div>
        <div className="mt-3 types-of-processing-navigation-data">
          <p className="uppercase text-xl">{typesOfProcessing.cookie.title}</p>
          <p>
            {typesOfProcessing.cookie.description}
            <Link className="font-medium mx-1 underline" to="/cookie">
              Cookie Policy
            </Link>
          </p>
        </div>
      </div>
      <div className="rights-data-subject">
        <p className="uppercase text-2xl md:text-4xl mt-2 mb-5 font-medium">
          {rightsData.title}
        </p>
        <p>{rightsData.description}</p>
        <ul className="ml-3 md:ml-5">
          <li className="list-disc my-1">{rightsData.itemize.item1}</li>
          <li className="list-disc my-1">{rightsData.itemize.item2}</li>
          <li className="list-disc my-1">{rightsData.itemize.item3}</li>
          <li className="list-disc my-1">{rightsData.itemize.item4}</li>
          <li className="list-disc my-1">{rightsData.itemize.item5}</li>
          <li className="list-disc my-1">{rightsData.itemize.item7}</li>
          <li className="list-disc my-1">{rightsData.itemize.item7}</li>
        </ul>
        <p>
          {rightsData.description2.text1}
          <a href="mailto:info@lespromesses.com"> info@lespromesses.com</a>
          {rightsData.description2.text2}
        </p>
        <p>{rightsData.updateDataDoc}</p>
      </div>
    </div>
  );
};

export default Privacy;
