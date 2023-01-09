---
title: "ServiceNow Custom Fields"
description: ""
lead: ""
date: 2023-01-08
draft: false
weight: 500
toc: false
tags:
  - servicenow
resources:
  - src: servicenow-custom-fields.png
---

### Requirements

- Begin creating a [ServiceNow subscription](/how-to/ticketing/servicenow/subscription/)

### ServiceNow Custom Fields

BluBracket integration with ServiceNow supports adding custom fields that are used to create the tickets.

{{< figure src="servicenow-custom-fields.png" >}}

These key-value pairs are supplied directly to the ServiceNow API. By default BluBracket is already sending the following fields:

- short_description
- description
- contact_type
- category
- subcategory

For a list of potential fields to supply, view the [ServiceNow incident docs](https://docs.servicenow.com/bundle/tokyo-it-service-management/page/product/incident-management/task/create-an-incident.html)
