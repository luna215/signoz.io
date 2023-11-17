import React, { useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import FAQBody from "../../components/FAQPricing";
import { Chevron, RightSVG, WrongSVG } from "../../svgs/common";
import { TalkToExpert } from "../../modules/talk-to-expert";
import { CommunityEdition } from "../../modules/community-edition";
import { UserReview } from "../../modules/user-review";
import { TrySigNozCTA } from "../../modules/try-signoz-cta";
import { DataProtection } from "../../modules/data-protection";
import styles from "./styles.module.css";
import { CostComparison } from "../../modules/cost-comparison";
import { TrustedByTeams } from "../../modules/trusted-by";
import Heading from "../../components/ui/Heading";
import SubHeading from "../../components/ui/SubHeading";
import Divider from "../../components/ui/Divider";

function Pricing() {
  return (
    <Layout title="SigNoz Plans">
      <PricingPlans />
      <ExploreAllFeature />
      {/* Companies Logo */}
      <TrustedByTeams />      
      {/* Cost Comparison Graph */}
      <CostComparison />
      {/* Data protection */}
      <DataProtection />
      {/* Talk To Expert */}
      <TalkToExpert />
      {/* More Options */}
      <CommunityEdition />
      {/* FAQ section */}
      {<FAQ/>}
      {/* User Review */}
      <UserReview />
      {/* Give a Try CTA */}
      <TrySigNozCTA />
    </Layout>
  );
}

export default Pricing;
function FAQ() {
  return (
    <section className={styles.faq}>
      <div className={`container ${styles.faqContainer}`}>
        <div className="row">
          <div className="col col--8 col--offset-2">
            <p className={`hero__subtitle margin--md ${styles.title}`}>FAQs</p>
            <div className="card-demo margin--md">
              <FAQBody />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const RightIcon = () => (
  <svg
    className="text-green-500 h-6 w-6"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clip-rule="evenodd"
    ></path>
  </svg>
);

const CrossIcon = () => {
  return (
    <svg
      className="h-5 w-5"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.5 8C0.5 12.1423 3.85775 15.5 8 15.5C12.1423 15.5 15.5 12.1423 15.5 8C15.5 3.85775 12.1423 0.5 8 0.5C3.85775 0.5 0.5 3.85775 0.5 8ZM10.4484 11.5L8 9.05156L5.55157 11.5L4.50002 10.4485L6.94846 8.00001L4.5 5.55155L5.55154 4.5L8 6.94846L10.4485 4.5L11.5 5.55155L9.05154 8.00001L11.5 10.4485L10.4484 11.5Z"
        fill="#FF5E7B"
      />
    </svg>
  );
};

const LoadingIcon = () => {
  return (
    <svg
      className="h-6 w-6 "
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="20"
      height="20"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#fff"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
      ></circle>
    </svg>
  );
};

const PricingPlans = () => {
  const [tab, setTab] = useState("cloud");

  return (
    <section className={styles.pricing}>
      <div className={`container ${styles.pricingContainer}`}>
        <div className="flex justify-center my-5">
          <div className="flex rounded-3xl">
            <nav
              className={`flex space-x-2 rounded-3xl ${styles.pricingTabContainer}`}
            >
              <button
                type="button"
                // TODO COLOR BLUR
                // relative after:absolute after:content-[''] after:w-14 after:h-14 after:top-[0%] after:right-[50%] after:bg-primary-400 after:rounded-full after:opacity-50 after:blur-3xl
                className={`rounded-3xl border-none px-6 py-2 cursor-pointer 
            ${tab === "cloud" ? "bg-primary-400" : "bg-transparent"}`}
                onClick={() => setTab("cloud")}
              >
                Cloud
              </button>
              <button
                type="button"
                className={`rounded-3xl border-none px-6 py-2 cursor-pointer ${
                  tab === "self-managed" ? "bg-primary-400" : "bg-transparent"
                }`}
                onClick={() => setTab("self-managed")}
              >
                Self Managed
              </button>
            </nav>
          </div>
        </div>

        <div className="flex flex-col items-center mb-5 text-center mx-auto max-w-4xl">
          <Heading type={1}>
            Transparent & Predictable Pricing for{" "}
            {tab === "cloud" ? "Cloud" : "Self Managed"}
          </Heading>
          <SubHeading>
            Tired of unpredictable pricing and complex billing structure? Save
            up to{" "}
            <Link href="/blog/pricing-comparison-signoz-vs-datadog-vs-newrelic-vs-grafana/">
              <u>90% on your Datadog bill</u>
            </Link>{" "}
            with SigNoz. No user-based and host-based pricing.
          </SubHeading>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-8 md:max-w-md lg:max-w-6xl mx-auto justify-center pricing-plans">
          <div className="px-8 py-5 pricing-card bg-primary-400 bg-opacity-5">
            <div>
              <h3 className="font-heading text-2xl font-bold ">Teams</h3>
              <p className="leading-relaxed text-base mb-4 text-gray-400">
                For teams that need high-performing applications.
              </p>
              <p>
                Starts at just
                <br />
                <span className="text-xl text-primary-400">$199/Month*</span>
              </p>
            </div>
            <Divider isDashed />
            <div className="__card__body">
              <div
                className={`${styles.pricingDetails} ${styles.packageDetailBlock}`}
              >
                <h4 className={styles.packageDetailTitle}>Pricing</h4>
                <div>
                  <span>Logs</span>
                  <span>$0.3 per GB ingested</span>
                </div>
                <div>
                  <span>Traces</span>
                  <span>$0.3 per GB ingested</span>
                </div>
                <div>
                  <span>Metrics</span>
                  <span>$0.1 per mn samples</span>
                </div>
                <br />
                <div>
                  <span>
                    <li>
                      Add as many users as you want. No user-based pricing
                    </li>
                  </span>
                </div>
                <div>
                  <span>
                    {" "}
                    <li>No host-based pricing</li>
                  </span>
                </div>
                <br />

                <div>
                  <span>
                    *$199 includes data usage. Monthly bill will be $199 till
                    you ingest data higher than what's covered in $199.
                  </span>
                </div>
              </div>
              <Divider isDashed />
              <p className={styles.retention}>
                Retention: 15 days for Traces & Logs, 30 days for Metrics
              </p>
              <Divider isDashed />
              <div
                className={`${styles.deploymentOptions} ${styles.packageDetailBlock}`}
              >
                <h4 className={styles.packageDetailTitle}>
                  Deployment Options
                </h4>
                <div>
                  <span>SaaS</span>
                  <span>
                    <RightSVG />
                  </span>
                </div>
                <div></div>
              </div>
              <Divider isDashed />
              <div className={`${styles.support} ${styles.packageDetailBlock}`}>
                <h4 className={styles.packageDetailTitle}>Support</h4>
                <div>
                  <span>Community Slack</span>
                  <span>
                    <RightSVG />
                  </span>
                </div>
                <div>
                  <span>Email</span>
                  <span>
                    <RightSVG />
                  </span>
                </div>
                <div>
                  <span>Dedicated Slack Channel</span>
                  <span className="text-right">On spends above $999</span>
                </div>
              </div>
              <Divider isDashed />
              <div className={styles.packageDetailBlock}>
                <h4 className={styles.packageDetailTitle}>Features</h4>
                <ul className="list-icon-right">
                  <li>APM & Distributed Tracing</li>
                  <li>Log Management</li>
                  <li>Infrastructure Monitoring</li>
                  <li>Exceptions Monitoring</li>
                  <li>Alerts Management</li>
                  <li>SSO and SAML Support</li>
                  <li>Service Dependency Visualization</li>
                  <li>Run aggregates on ingested spans</li>
                  <li>Live Tail Logging</li>
                  <li>Unlimited Logs & Traces based Dashboards</li>
                </ul>
              </div>
              <Divider isDashed />
              <div className={styles.packageDetailBlock}>
                <h4 className={styles.packageDetailTitle}>Upcoming</h4>
                <ul className="list-icon-right">
                  <li>AWS Cloudwatch Integration</li>
                </ul>
              </div>
            </div>
            <Divider isDashed />
            <div className={`__card__footer ${styles.card__footer}`}>
              <Link
                id="btn-pricing-signoz-cloud-2"
                className={`button button--primary ${styles.pricingCtaBtn}`}
                href={"/teams/"}
              >
                Get started - free
              </Link>
            </div>
          </div>
          <div className="px-8 py-5 pricing-card bg-primary-400 bg-opacity-5">
            <div>
              <h3 className="font-heading text-2xl font-bold ">
                Enterprise Cloud
              </h3>
              <p className="leading-relaxed text-base mb-4 text-gray-400">
                For at-scale orgs with advanced security, compliance and support
                needs.
              </p>
              <p>Flexible Pricing for scale</p>
            </div>
            <Divider isDashed />
            <div className="__card__body">
              <div
                className={`${styles.pricingDetails} ${styles.packageDetailBlock}`}
              >
                <h4 className={styles.packageDetailTitle}>Pricing</h4>
                <div></div>
                <div>
                  <span>Custom Pricing</span>
                  <span>
                    <RightSVG />
                  </span>
                </div>
                <div>
                  <span>Custom Retention</span>
                  <span>
                    <RightSVG />
                  </span>
                </div>
              </div>
              <Divider isDashed />
              <div
                className={`${styles.deploymentOptions} ${styles.packageDetailBlock}`}
              >
                <h4 className={styles.packageDetailTitle}>
                  Deployment Options
                </h4>
                <div>
                  <span>SaaS</span>
                  <span>
                    <RightSVG />
                  </span>
                </div>
                <div>
                  <span>Managed by SigNoz in your cloud</span>
                  <span>
                    <RightSVG />
                  </span>
                </div>
              </div>
              <Divider isDashed />
              <div className={`${styles.support} ${styles.packageDetailBlock}`}>
                <h4 className={styles.packageDetailTitle}>Support</h4>
                <div>
                  <span>Email</span>
                  <span>
                    <RightSVG />
                  </span>
                </div>
                <div>
                  <span>Dedicated Slack Channel</span>
                  <span>
                    <RightSVG />
                  </span>
                </div>
                <div>
                  <span>Team Training</span>
                  <span>
                    <RightSVG />
                  </span>
                </div>
                <div>
                  <span>Dashboard Configuration Support</span>
                  <span>
                    <RightSVG />
                  </span>
                </div>
                <div>
                  <span>Instrumentation Support</span>
                  <span>
                    <RightSVG />
                  </span>
                </div>
                <div>
                  <span>SLA w/ downtime developer pairing</span>
                  <span>
                    <RightSVG />
                  </span>
                </div>
              </div>
              <Divider isDashed />
              <div className={styles.packageDetailBlock}>
                <h4 className={styles.packageDetailTitle}>Features</h4>
                <p className={styles.featureBlur}>
                  Includes all features in Team
                </p>
                <ul className="list-icon-right">
                  <li>Custom integration for metrics and logs</li>
                  <li>AWS Private Link</li>
                  <li>VPC Peering</li>
                  <li>Security tightening for on-prem installation</li>
                  <li>Monitor Health of SigNoz</li>
                  <li>Query API Keys (access data from anywhere)</li>
                </ul>
              </div>
              <Divider isDashed />
              <div className={styles.packageDetailBlock}>
                <h4 className={styles.packageDetailTitle}>Upcoming</h4>
                <ul className="list-icon-right">
                  <li>Finer RBAC with custom roles</li>
                  <li>Audit Logs</li>
                  <li>Custom retention for different sources of logs</li>
                  <li>Multi-tenancy</li>
                </ul>
              </div>
            </div>
            <Divider isDashed />
            <div className={`__card__footer ${styles.card__footer}`}>
              <Link
                id="btn-pricing-signoz-enterprise-2"
                className={`button button--primary ${styles.pricingCtaBtn}`}
                href={"/enterprise/"}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ALL_FEATURES_DATA = {
  HEADER: [
    { heading: "", desc: "" },
    { heading: "Community Edition", desc: "" },
    { heading: "Teams", desc: "Cloud Only" },
    {
      heading: "Enterprise",
      desc: "Cloud or Self Hosted or Managed by SigNoz in your Cloud",
    },
  ],
  ROWS: [
    {
      section: "APM & Distributed Tracing",
      features: [
        {
          feature: "Out of Box APM metrics",
          inCommunity: <RightIcon />,
          inTeams: <RightIcon />,
          inEnterprise: <RightIcon />,
        },
        {
          feature: "Filtering and creating dashboards based on traces data",
          inCommunity: <RightIcon />,
          inTeams: <RightIcon />,
          inEnterprise: <RightIcon />,
        },
        {
          feature: "Creating alerts based on traces data",
          inCommunity: <RightIcon />,
          inTeams: <RightIcon />,
          inEnterprise: <RightIcon />,
        },
        {
          feature: "Unlimited dashboards & alerts from traces",
          inCommunity: (
            <div>
              <CrossIcon />
              <small>(Limited to 5 dashboard panels & alerts)</small>
            </div>
          ),
          inTeams: <RightIcon />,
          inEnterprise: <RightIcon />,
        },
      ],
    },
    {
      section: "Log Management",
      features: [
        {
          feature: "Parsing logs via pipeline",
          inCommunity: <RightIcon />,
          inTeams: <RightIcon />,
          inEnterprise: <RightIcon />,
        },
        {
          feature: "Create direct filters from JSON logs",
          inCommunity: <RightIcon />,
          inTeams: <RightIcon />,
          inEnterprise: <RightIcon />,
        },
        {
          feature: "Saved Views for logs",
          inCommunity: <RightIcon />,
          inTeams: <RightIcon />,
          inEnterprise: <RightIcon />,
        },
        {
          feature: "Unlimited dashboards & alerts for logs",
          inCommunity: (
            <div>
              <CrossIcon />
              <small>(Limited to 5 dashboard panels & alerts)</small>
            </div>
          ),
          inTeams: <RightIcon />,
          inEnterprise: <RightIcon />,
        },
      ],
    },
    {
      section: "Infrastructure Monitoring",
      features: [
        {
          feature: "Out of the box dashboards for hostmetrics",
          inCommunity: <RightIcon />,
          inTeams: <RightIcon />,
          inEnterprise: <RightIcon />,
        },
        {
          feature: "Kubernetes Monitoring",
          inCommunity: <RightIcon />,
          inTeams: <RightIcon />,
          inEnterprise: <RightIcon />,
        },
        {
          feature: "Container Monitoring",
          inCommunity: <RightIcon />,
          inTeams: <RightIcon />,
          inEnterprise: <RightIcon />,
        },
      ],
    },
    {
      section: "Exceptions Monitoring",
      features: [
        {
          feature: "Separate view of exceptions based on traced data",
          inCommunity: <LoadingIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <LoadingIcon />,
        },
      ],
    },
    {
      section: "Alerts Management",
      features: [
        {
          feature: "Create alerts directly from dashboards",
          inCommunity: <LoadingIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <LoadingIcon />,
        },
        {
          feature: "Support for webhooks, slack and Pagerduty as channel",
          inCommunity: <LoadingIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <LoadingIcon />,
        },
        {
          feature: "MS Teams as alert channel",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <LoadingIcon />,
        },
      ],
    },
    {
      section: "Data Pipelines",
      features: [
        {
          feature: "Support for S3 archival",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <LoadingIcon />,
        },
        {
          feature: "Service Dependency Visualization",
          inCommunity: <LoadingIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <LoadingIcon />,
        },
        {
          feature: "Overview of your application graph with health indication",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <LoadingIcon />,
        },
      ],
    },
    {
      section: "Configuration",
      features: [
        {
          feature: "SSO/SAML support",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <div>✅</div>,
        },
        {
          feature: "Dashboard Locking & Access control",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <div>✅</div>,
        },
        {
          feature: "Security tightening for on-premise installtion",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <div>Only in Enterprise Self Managed</div>,
        },
        {
          feature: "Monitor Health of SigNoz",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <div>Only in Enterprise Self Managed</div>,
        },
        {
          feature: "Finer RBAC with custom roles",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <div>🔃 Coming soon</div>,
        },
        {
          feature: "AWS Private link",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <div>Only in Enterprise Cloud</div>,
        },
        {
          feature: "Alert as code",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <div>🔃 Coming soon</div>,
        },
        {
          feature: "Audit Logs",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <div>🔃 Coming soon</div>,
        },
        {
          feature: "Custom retention for different sources of logs",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <div>🔃 Coming soon</div>,
        },
        {
          feature: "Access Data in SigNoz from Anywhere (via API keys)",
          inCommunity: <LoadingIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <div>✅</div>,
        },
        {
          feature: "Multi-tenancy",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <div>🔃 Coming soon</div>,
        },
      ],
    },
    {
      section: "Support",
      features: [
        {
          feature: "Community Support on Slack",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <div>Only in Enterprise Self Managed</div>,
        },
        {
          feature: "Email Support",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <div>🔃 Coming soon</div>,
        },
        {
          feature: "In product chat support",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <div>Only in Enterprise Cloud</div>,
        },
        {
          feature: "Dedicated Slack Channel",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <div>🔃 Coming soon</div>,
        },
        {
          feature: "Team Training",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <div>🔃 Coming soon</div>,
        },
        {
          feature: "Dashboard Configuration Support",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <div>🔃 Coming soon</div>,
        },
        {
          feature: "Instrumentation Support",
          inCommunity: <LoadingIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <div>✅</div>,
        },
        {
          feature: "SLA w/ downtime developer pairing",
          inCommunity: <CrossIcon />,
          inTeams: <LoadingIcon />,
          inEnterprise: <div>🔃 Coming soon</div>,
        },
      ],
    },
  ],
};

const ExploreAllFeature = () => {
  const [isOpened, setIsOpened] = useState(false);

  const Opacity = {
    1: "bg-opacity-10",
    2: "bg-opacity-20",
    3: "bg-opacity-30",
  };

  return (
    <div>
      <div className="flex justify-center my-5">
        <div className="flex rounded-3xl">
          <nav
            className={`flex space-x-2 rounded-3xl ${styles.pricingTabContainer}`}
          >
            <button
              type="button"
              className={`rounded-3xl border-none px-6 py-4 cursor-pointer bg-primary-400 hover:bg-primary-500 flex flex-nowrap gap-2 text-md font-bold`}
              onClick={() => setIsOpened(!isOpened)}
            >
              <span>Explore all Features</span>
              <span className={isOpened ? "rotate-180" : ""}>
                <Chevron />
              </span>
            </button>
          </nav>
        </div>
      </div>
      {isOpened ? (
        <div className="mx-auto max-w-4xl">
          <div className="my-10">
            <div className="container-medium">
              <div className="ovc-table_top-wrapper grid grid-cols-4 gap-1">
                {ALL_FEATURES_DATA.HEADER.map((h, idx) => {
                  return (
                    <div
                      className={`${
                        idx !== 0
                          ? `rounded-tr-lg rounded-tl-lg p-2 bg-primary-400 ${Opacity[idx]}`
                          : ""
                      }`}
                    >
                      <h2 className="m-0">{h.heading}</h2>
                      <p>{h.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="table-body">
                {ALL_FEATURES_DATA.ROWS.map((row, i) => {
                  return (
                    <div
                      className={`${
                        false
                          ? `rounded-lg bg-primary-400 bg-opacity-[${i}]`
                          : ""
                      }`}
                    >
                      <Divider />
                      <h3 className="m-0 my-1 p-2">{row.section}</h3>
                      <Divider />
                      <div className=" grid grid-cols-1 gap-1">
                        {row.features.map((r, idx) => {
                          return (
                            <div
                              className={`${
                                false
                                  ? `rounded-lg bg-primary-400 bg-opacity-[${idx}]`
                                  : ""
                              }`}
                            >
                              <div className="grid grid-cols-4 gap-1">
                                <h4 className="m-0 p-2">{r.feature}</h4>
                                <div
                                  className={`bg-primary-400 text-center flex justify-center items-center bg-opacity-10 p-2 ${
                                    row.features.length - 1 === idx &&
                                    ALL_FEATURES_DATA.ROWS.length - 1 === i
                                      ? "rounded-bl-lg rounded-br-lg"
                                      : ""
                                  }`}
                                >
                                  {r.inCommunity}
                                </div>
                                <div
                                  className={`bg-primary-400 text-center flex justify-center items-center bg-opacity-20 p-2 ${
                                    row.features.length - 1 === idx &&
                                    ALL_FEATURES_DATA.ROWS.length - 1 === i
                                      ? "rounded-bl-lg rounded-br-lg"
                                      : ""
                                  }`}
                                >
                                  {r.inTeams}
                                </div>
                                <div
                                  className={`bg-primary-400 text-center flex justify-center items-center bg-opacity-30 p-2 ${
                                    row.features.length - 1 === idx &&
                                    ALL_FEATURES_DATA.ROWS.length - 1 === i
                                      ? "rounded-bl-lg rounded-br-lg"
                                      : ""
                                  }`}
                                >
                                  {r.inEnterprise}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
