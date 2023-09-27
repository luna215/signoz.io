---
title: We’ve raised $6.5M to bring open source observability, natively based on opentelemetry to companies
slug: signoz-funding
date: 2023-09-28
tags: [OpenTelemetry, SigNoz]
authors: pranay
description: SigNoz Fundraise
image: /img/blog/2023/09/grafana-alternatives-cover.jpeg
hide_table_of_contents: false
keywords:
  - funding
  - signoz
  - observability
---

<head>
  <link rel="canonical" href="https://signoz.io/blog/signoz-funding/"/>
</head>

import GetStartedSigNoz from '../docs/shared/get-started-signoz.md';


We are excited to share that we have raised $6.5M led by SignalFire and joined by Uncorrelated Ventures, co-founders of GitHub and PlanetScale as angels, to power our mission of bringing great observability tooling to companies of all sizes. The round is made up of our recent $5.4M raise led by SignalFire and our previously unannounced $1.1m round by YCombinator and bunch of angels.

<!--truncate-->
![Cover Image](/img/blog/2023/09/Hero-Image.webp)


We are deeply grateful to  the developer community for their continuous feedback & support in our journey to become one of the most loved integrated open source observability products. We today have ~14K stars on our Github repo, around 5mn downloads of our docker image & more than 100 contributors from across the globe

## Mission

Our mission is to democratise great observability tools for teams for all shapes and sizes. Even though there are plenty of tools in the market, it was surprising to us that many companies still are stuck in basic logs and metrics, and not able to leverage the modern toolings like APM, Distributed tracing, etc. Often this is due to high pricing, but sometimes it is just not being able to use tools because of company policies. We want to change this, make great observability available to everyone.

## How did it all start?

When we started SigNoz, there was a considerable difference between the observability solutions available in open source and what was available in closed source products like DataDog, NewRelic. As developers, we wanted much better integrated tooling to be available in open source - as that is where we start first. We couldn't find such a project, so we decided to build this. 

At that time (~early 2021), OpenTelemetry was still a young project, but the idea of instrumentation which is open standard appealed to us. Hence, we started building SigNoz natively on top of OpenTelemetry. We don’t have any instrumentation SDKs of our own.

Today, this makes SigNoz one of the most powerful opentelemetry native observability platforms with features which leverage data models prescribed by OTel.

<figure data-zoomable align='center'>
    <img src="/img/blog/2023/09/Product-Image.webp" alt="Correlating across metrics, traces and logs in a single platform"/>
    <figcaption><i>Correlating across metrics, traces and logs in a single platform</i></figcaption>
</figure>




## Focus on solving issues faster & transparency

One of the key focuses for us is to help developers & platform engineers solve issues faster. We believe that this is possible only if we have different signals in one place which can be tightly correlated to come to the root cause much faster.


Focus on transparent and predictable pricing: Many teams we work with share their concerns about unpredictable and hidden pricing of some of the other vendors in this space. Embracing our open source ethos, we are committed to predictable and transparent pricing. Being based on modern columnar data stores also helps us bring the latest technology to our users.

## Where are we going?

We will use the funds to mature the product and spend more on bringing more opentelemetry native features to the observability ecosystem.

Emergence of open standards for instrumentation: We believe all open source softwares will emit telemetry in vendor neutral format like OpenTelemetry. This enables their users to get more detailed information about what’s happening inside them when a request is executed. Having an open-source instrumentation automatically calls for an backend and visualization layer which  is open-source & that  is where SIgNoz comes in 

## SigNoz Cloud

It’s also now easier than ever to get started with SigNoz as today we announce the public launch of SigNoz Cloud, our full-managed offering of the open-source product.  This is an exciting milestone for the team as we know a lot of our community have wanted to use SigNoz, without worrying about hosting and managing their own infrastructure. It’s available right now to get started!

<figure data-zoomable align='center'>
    <img src="/img/blog/2023/09/Team-Photo.webp" alt="Team SigNoz"/>
    <figcaption><i>Team SigNoz</i></figcaption>
</figure>


## We didn't do it alone; it takes a village.

We are still in early stages of democratising great observability, but we are grateful for the love and support we have received from the developer community, investors who backed us in our early days and team members who shared our vision and joined us to make it come true.

We would like to thank YCombinator for their early belief in us, early community members who gave feedback on the product. We have been fortunate to have been backed by a great set of investors and experts in the domain including Salil (Uncorrelated Ventures), Jiten Viadya(PlanetScale). Paul Coppleman (Supabase), Tom-Preston Warner (ex-Github)

---

Try [SigNoz Cloud](https://signoz.io/teams) today!

Join our [SanFrancisco OpenTelemetry](https://lu.ma/lrd71rqh) meetup on October 4