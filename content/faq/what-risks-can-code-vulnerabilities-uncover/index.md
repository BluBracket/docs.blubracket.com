---
title: "What risks can the code vulnerabilty checks uncover?"
aliases:
  -
description: "Default code vulnerability scanning policies and capabilities"
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 100
toc: false
tags:
  - semgrep
  - code vulnerabilities
  - code scanning
resources:
  - src:
---

BluBracket's code vulnerability scanning runs automatically on every repository. If the repo contains any supported code, it will be scanned for risks according to best-practices recommendations outlined below.

{{< alert icon="👉" text="This feature is in limited beta at this time." />}}

### What languages are supported

- C#
- GitHub Actions YAML
- Go
- Java
- JavaScript
- Python
- Ruby
- TypeScript

### What rules are checked

#### C\#

##### Command injection

- csharp.lang.security.injections.os-command.os-command-injection.yaml

##### Deserialization

- csharp.lang.security.insecure-deserialization.binary-formatter.insecure-binaryformatter-deserialization.yaml
- csharp.lang.security.insecure-deserialization.fast-json.insecure-fastjson-deserialization.yaml
- csharp.lang.security.insecure-deserialization.fs-pickler.insecure-fspickler-deserialization.yaml
- csharp.lang.security.insecure-deserialization.javascript-serializer.insecure-javascriptserializer-deserialization.yaml
- csharp.lang.security.insecure-deserialization.los-formatter.insecure-losformatter-deserialization.yaml
- csharp.lang.security.insecure-deserialization.net-data-contract.insecure-netdatacontract-deserialization.yaml
- csharp.lang.security.insecure-deserialization.newtonsoft.insecure-newtonsoft-deserialization.yaml
- csharp.lang.security.insecure-deserialization.soap-formatter.insecure-soapformatter-deserialization.yaml

##### GitHub Actions YAML

- yaml.github-actions.security.allowed-unsecure-commands.allowed-unsecure-commands.yaml
- yaml.github-actions.security.pull-request-target-code-checkout.pull-request-target-code-checkout
- yaml.github-actions.security.run-shell-injection.run-shell-injection.yaml

#### Go

##### Crypto

- go.lang.security.audit.crypto.bad_imports.insecure-module-used.yaml
- go.lang.security.audit.crypto.insecure_ssh.avoid-ssh-insecure-ignore-host-key.yaml
- go.lang.security.audit.crypto.math_random.math-random-used.yaml
- go.lang.security.audit.crypto.missing-ssl-minversion.missing-ssl-minversion.yaml
- go.lang.security.audit.crypto.ssl.ssl-v3-is-insecure.yaml
- go.lang.security.audit.crypto.tls.tls-with-insecure-cipher.yaml
- go.lang.security.audit.crypto.use_of_weak_crypto.use-of-DES.yaml
- go.lang.security.audit.crypto.use_of_weak_crypto.use-of-md5.yaml
- go.lang.security.audit.crypto.use_of_weak_crypto.use-of-rc4.yaml
- go.lang.security.audit.crypto.use_of_weak_crypto.use-of-sha1.yaml
- go.lang.security.audit.crypto.use_of_weak_rsa_key.use-of-weak-rsa-key.yaml
- go.lang.security.audit.net.use-tls.use-tls.yaml

##### User I/O sanitization and validation

- go.gorilla.security.audit.handler-assignment-from-multiple-sources.handler-assignment-from-multiple-sources.yaml
- go.gorilla.security.audit.session-cookie-missing-httponly.session-cookie-missing-httponly.yaml
- go.gorilla.security.audit.session-cookie-missing-secure.session-cookie-missing-secure.yaml
- go.lang.security.audit.database.string-formatted-query.string-formatted-query.yaml
- go.lang.security.audit.net.cookie-missing-httponly.cookie-missing-httponly.yaml
- go.lang.security.audit.net.cookie-missing-secure.cookie-missing-secure.yaml
- go.lang.security.audit.net.formatted-template-string.formatted-template-string.yaml
- go.lang.security.audit.net.pprof.pprof-debug-exposure.yaml
- go.lang.security.audit.net.unescaped-data-in-htmlattr.unescaped-data-in-htmlattr.yaml
- go.lang.security.audit.net.unescaped-data-in-js.unescaped-data-in-js.yaml
- go.lang.security.audit.net.unescaped-data-in-url.unescaped-data-in-url.yaml
- go.lang.security.audit.net.wip-xss-using-responsewriter-and-printf.wip-xss-using-responsewriter-and-printf.yaml
- go.lang.security.audit.xss.no-printf-in-responsewriter.no-printf-in-responsewriter.yaml

##### Other

- go.lang.security.audit.net.bind_all.avoid-bind-to-all-interfaces.yaml
- go.lang.security.audit.net.dynamic-httptrace-clienttrace.dynamic-httptrace-clienttrace.yaml
- go.lang.security.audit.reflect-makefunc.reflect-makefunc.yaml
- go.lang.security.audit.unsafe-reflect-by-name.unsafe-reflect-by-name.yaml

#### Java

- java.jax-rs.security.insecure-resteasy.default-resteasy-provider-abuse.yaml
- java.jax-rs.security.insecure-resteasy.insecure-resteasy-deserialization.yaml
- java.jax-rs.security.jax-rs-path-traversal.jax-rs-path-traversal.yaml
- java.jboss.security.seam-log-injection.seam-log-injection.yaml
- java.jjwt.security.jwt-none-alg.jjwt-none-alg.yaml
- java.lang.security.audit.anonymous-ldap-bind.anonymous-ldap-bind.yaml
- java.lang.security.audit.bad-hexa-conversion.bad-hexa-conversion.yaml
- java.lang.security.audit.blowfish-insufficient-key-size.blowfish-insufficient-key-size.yaml
- java.lang.security.audit.cbc-padding-oracle.cbc-padding-oracle.yaml
- java.lang.security.audit.command-injection-formatted-runtime-call.command-injection-formatted-runtime-call.yaml
- java.lang.security.audit.cookie-missing-httponly.cookie-missing-httponly.yaml
- java.lang.security.audit.cookie-missing-samesite.cookie-missing-samesite.yaml
- java.lang.security.audit.cookie-missing-secure-flag.cookie-missing-secure-flag.yaml
- java.lang.security.audit.crlf-injection-logs.crlf-injection-logs.yaml
- java.lang.security.audit.crypto.des-is-deprecated.des-is-deprecated.yaml
- java.lang.security.audit.crypto.desede-is-deprecated.desede-is-deprecated.yaml
- java.lang.security.audit.crypto.ecb-cipher.ecb-cipher.yaml
- java.lang.security.audit.crypto.no-null-cipher.no-null-cipher.yaml
- java.lang.security.audit.crypto.no-static-initialization-vector.no-static-initialization-vector.yaml
- java.lang.security.audit.crypto.rsa-no-padding.rsa-no-padding.yaml
- java.lang.security.audit.crypto.ssl.avoid-implementing-custom-digests.avoid-implementing-custom-digests.yaml
- java.lang.security.audit.crypto.ssl.defaulthttpclient-is-deprecated.defaulthttpclient-is-deprecated.yaml
- java.lang.security.audit.crypto.ssl.insecure-hostname-verifier.insecure-hostname-verifier.yaml
- java.lang.security.audit.crypto.ssl.insecure-trust-manager.insecure-trust-manager.yaml
- java.lang.security.audit.crypto.unencrypted-socket.unencrypted-socket.yaml
- java.lang.security.audit.crypto.use-of-md5.use-of-md5.yaml
- java.lang.security.audit.crypto.use-of-sha1.use-of-sha1.yaml
- java.lang.security.audit.crypto.weak-random.weak-random.yaml
- java.lang.security.audit.crypto.weak-rsa.use-of-weak-rsa-key.yaml
- java.lang.security.audit.dangerous-groovy-shell.dangerous-groovy-shell.yaml
- java.lang.security.audit.el-injection.el-injection.yaml
- java.lang.security.audit.formatted-sql-string.formatted-sql-string.yaml
- java.lang.security.audit.http-response-splitting.http-response-splitting.yaml
- java.lang.security.audit.insecure-smtp-connection.insecure-smtp-connection.yaml
- java.lang.security.audit.jdbc-sql-formatted-string.jdbc-sql-formatted-string.yaml
- java.lang.security.audit.ldap-entry-poisoning.ldap-entry-poisoning.yaml
- java.lang.security.audit.ldap-injection.ldap-injection.yaml
- java.lang.security.audit.object-deserialization.object-deserialization.yaml
- java.lang.security.audit.ognl-injection.ognl-injection.yaml
- java.lang.security.audit.overly-permissive-file-permission.overly-permissive-file-permission.yaml
- java.lang.security.audit.script-engine-injection.script-engine-injection.yaml
- java.lang.security.audit.sqli.tainted-sql-from-http-request.tainted-sql-from-http-request.yaml
- java.lang.security.audit.tainted-cmd-from-http-request.tainted-cmd-from-http-request.yaml
- java.lang.security.audit.tainted-ldapi-from-http-request.tainted-ldapi-from-http-request.yaml
- java.lang.security.audit.tainted-session-from-http-request.tainted-session-from-http-request.yaml
- java.lang.security.audit.tainted-xpath-from-http-request.tainted-xpath-from-http-request.yaml
- java.lang.security.audit.unvalidated-redirect.unvalidated-redirect.yaml
- java.lang.security.audit.url-rewriting.url-rewriting.yaml
- java.lang.security.audit.weak-ssl-context.weak-ssl-context.yaml
- java.lang.security.audit.xml-decoder.xml-decoder.yaml
- java.lang.security.audit.xss.jsp.use-jstl-escaping.use-jstl-escaping.yaml
- java.lang.security.audit.xssrequestwrapper-is-insecure.xssrequestwrapper-is-insecure.yaml
- java.lang.security.httpservlet-path-traversal.httpservlet-path-traversal.yaml
- java.lang.security.insecure-jms-deserialization.insecure-jms-deserialization.yaml
- java.lang.security.servletresponse-writer-xss.servletresponse-writer-xss.yaml
- java.lang.security.xmlinputfactory-external-entities-enabled.xmlinputfactory-external-entities-enabled.yaml
- java.lang.security.xmlinputfactory-possible-xxe.xmlinputfactory-possible-xxe.yaml
- java.rmi.security.server-dangerous-class-deserialization.server-dangerous-class-deserialization.yaml
- java.rmi.security.server-dangerous-object-deserialization.server-dangerous-object-deserialization.yaml
- java.spring.security.audit.spel-injection.spel-injection.yaml
- java.spring.security.audit.spring-actuator-fully-enabled.spring-actuator-fully-enabled.yaml
- java.spring.security.audit.spring-csrf-disabled.spring-csrf-disabled.yaml
- java.spring.security.audit.spring-jsp-eval.spring-jsp-eval.yaml
- java.spring.security.audit.spring-unvalidated-redirect.spring-unvalidated-redirect.yaml
- java.spring.security.unrestricted-request-mapping.unrestricted-request-mapping.yaml

#### JavaScript

- javascript.bluebird.security.audit.tofastproperties-code-execution.tofastproperties-code-execution.yaml
- javascript.browser.security.eval-detected.eval-detected.yaml
- javascript.browser.security.insufficient-postmessage-origin-validation.insufficient-postmessage-origin-validation.yaml
- javascript.browser.security.open-redirect.js-open-redirect.yaml
- javascript.browser.security.raw-html-concat.raw-html-concat.yaml
- javascript.browser.security.wildcard-postmessage-configuration.wildcard-postmessage-configuration.yaml
- javascript.express.security.audit.express-cookie-settings.express-cookie-session-default-name.yaml
- javascript.express.security.audit.express-cookie-settings.express-cookie-session-no-domain.yaml
- javascript.express.security.audit.express-cookie-settings.express-cookie-session-no-expires.yaml
- javascript.express.security.audit.express-cookie-settings.express-cookie-session-no-httponly.yaml
- javascript.express.security.audit.express-cookie-settings.express-cookie-session-no-path.yaml
- javascript.express.security.audit.express-cookie-settings.express-cookie-session-no-secure.yaml
- javascript.express.security.audit.express-jwt-not-revoked.express-jwt-not-revoked.yaml
- javascript.express.security.audit.express-path-join-resolve-traversal.express-path-join-resolve-traversal.yaml
- javascript.express.security.audit.express-xml2json-xxe-event.express-xml2json-xxe-event.yaml
- javascript.express.security.audit.possible-user-input-redirect.unknown-value-in-redirect.yaml
- javascript.express.security.audit.res-render-injection.res-render-injection.yaml
- javascript.express.security.audit.xss.ejs.var-in-script-src.var-in-script-src.yaml
- javascript.express.security.audit.xss.ejs.var-in-script-tag.var-in-script-tag.yaml
- javascript.express.security.audit.xss.mustache.var-in-href.var-in-href.yaml
- javascript.express.security.audit.xss.mustache.var-in-script-tag.var-in-script-tag.yaml
- javascript.express.security.express-expat-xxe.express-expat-xxe.yaml
- javascript.express.security.express-jwt-hardcoded-secret.express-jwt-hardcoded-secret.yaml
- javascript.express.security.express-phantom-injection.express-phantom-injection.yaml
- javascript.express.security.express-puppeteer-injection.express-puppeteer-injection.yaml
- javascript.express.security.express-vm-injection.express-vm-compilefunction-context-injection.yaml
- javascript.express.security.express-vm-injection.express-vm-runincontext-context-injection.yaml
- javascript.express.security.express-vm-injection.express-vm-runinnewcontext-context-injection.yaml
- javascript.express.security.express-vm2-injection.express-vm2-context-injection.yaml
- javascript.express.security.express-wkhtml-injection.express-wkhtmltoimage-injection.yaml
- javascript.express.security.express-wkhtml-injection.express-wkhtmltopdf-injection.yaml
- javascript.express.security.express-xml2json-xxe.express-xml2json-xxe.yaml
- javascript.express.security.require-request.require-request.yaml
- javascript.fbjs.security.audit.insecure-createnodesfrommarkup.insecure-createnodesfrommarkup.yaml
- javascript.grpc.security.grpc-nodejs-insecure-connection.grpc-nodejs-insecure-connection.yaml
- javascript.lang.security.audit.dangerous-spawn-shell.dangerous-spawn-shell.yaml
- javascript.lang.security.audit.path-traversal.path-join-resolve-traversal.path-join-resolve-traversal.yaml
- javascript.lang.security.audit.unknown-value-with-script-tag.unknown-value-with-script-tag.yaml
- javascript.lang.security.audit.vm-injection.vm-compilefunction-code-injection.yaml
- javascript.lang.security.audit.vm-injection.vm-compilefunction-context-injection.yaml
- javascript.lang.security.audit.vm-injection.vm-runincontext-code-injection.yaml
- javascript.lang.security.audit.vm-injection.vm-runincontext-context-injection.yaml
- javascript.lang.security.audit.vm-injection.vm-runinnewcontext-code-injection.yaml
- javascript.lang.security.audit.vm-injection.vm-runinnewcontext-context-injection.yaml
- javascript.lang.security.audit.vm-injection.vm-runinthiscontext-code-injection.yaml
- javascript.lang.security.audit.vm-injection.vm-script-code-injection.yaml
- javascript.lang.security.audit.vm-injection.vm-sourcetextmodule-code-injection.yaml
- javascript.lang.security.detect-child-process.detect-child-process.yaml
- javascript.lang.security.detect-disable-mustache-escape.detect-disable-mustache-escape.yaml
- javascript.lang.security.detect-eval-with-expression.detect-eval-with-expression.yaml
- javascript.lang.security.detect-non-literal-require.detect-non-literal-require.yaml
- javascript.node-expat.security.audit.expat-xxe.expat-xxe.yaml
- javascript.passport-jwt.security.passport-hardcode.hardcoded-passport-secret.yaml
- javascript.sax.security.audit.sax-xxe.sax-xxe.yaml
- javascript.sequelize.security.audit.sequelize-enforce-tls.sequelize-enforce-tls.yaml
- javascript.sequelize.security.audit.sequelize-tls-disabled-cert-validation.sequelize-tls-disabled-cert-validation.yaml
- javascript.sequelize.security.audit.sequelize-weak-tls-version.sequelize-weak-tls-version.yaml
- javascript.serialize-javascript.security.audit.unsafe-serialize-javascript.unsafe-serialize-javascript.yaml
- javascript.shelljs.security.shelljs-exec-injection.shelljs-exec-injection.yaml
- javascript.xml2json.security.audit.xml2json-xxe.xml2json-xxe.yaml

#### Python

- python.boto3.security.hardcoded-token.hardcoded-token.yaml
- python.cryptography.security.insecure-cipher-algorithms.insecure-cipher-algorithm-blowfish.yaml
- python.cryptography.security.insecure-cipher-algorithms.insecure-cipher-algorithm-idea.yaml
- python.cryptography.security.insecure-cipher-algorithms.insecure-cipher-algorithm-rc4.yaml
- python.cryptography.security.insecure-cipher-mode-ecb.insecure-cipher-mode-ecb.yaml
- python.cryptography.security.insecure-hash-algorithms.insecure-hash-algorithm-md5.yaml
- python.cryptography.security.insecure-hash-algorithms.insecure-hash-algorithm-sha1.yaml
- python.cryptography.security.insufficient-dsa-key-size.insufficient-dsa-key-size.yaml
- python.cryptography.security.insufficient-ec-key-size.insufficient-ec-key-size.yaml
- python.cryptography.security.insufficient-rsa-key-size.insufficient-rsa-key-size.yaml
- python.django.security.audit.avoid-insecure-deserialization.avoid-insecure-deserialization.yaml
- python.django.security.audit.avoid-mark-safe.avoid-mark-safe.yaml
- python.django.security.audit.csrf-exempt.no-csrf-exempt.yaml
- python.django.security.audit.django-ratelimit.missing-ratelimit.missing-ratelimit.yaml
- python.django.security.audit.django-rest-framework.missing-throttle-config.missing-throttle-config.yaml
- python.django.security.audit.query-set-extra.avoid-query-set-extra.yaml
- python.django.security.audit.raw-query.avoid-raw-sql.yaml
- python.django.security.audit.secure-cookies.django-secure-set-cookie.yaml
- python.django.security.audit.templates.debug-template-tag.debug-template-tag.yaml
- python.django.security.audit.unvalidated-password.unvalidated-password.yaml
- python.django.security.audit.xss.template-blocktranslate-no-escape.template-blocktranslate-no-escape.yaml
- python.django.security.audit.xss.template-href-var.template-href-var.yaml
- python.django.security.audit.xss.template-translate-as-no-escape.template-translate-as-no-escape.yaml
- python.django.security.audit.xss.var-in-script-tag.var-in-script-tag.yaml
- python.django.security.passwords.password-empty-string.password-empty-string.yaml
- python.django.security.passwords.use-none-for-password-default.use-none-for-password-default.yaml
- python.flask.security.audit.app-run-param-config.avoid_app_run_with_bad_host.yaml
- python.flask.security.audit.app-run-security-config.avoid_using_app_run_directly.yaml
- python.flask.security.audit.debug-enabled.debug-enabled.yaml
- python.flask.security.audit.hardcoded-config.avoid_hardcoded_config_DEBUG.yaml
- python.flask.security.audit.hardcoded-config.avoid_hardcoded_config_ENV.yaml
- python.flask.security.audit.hardcoded-config.avoid_hardcoded_config_SECRET_KEY.yaml
- python.flask.security.audit.hardcoded-config.avoid_hardcoded_config_TESTING.yaml
- python.flask.security.audit.secure-set-cookie.secure-set-cookie.yaml
- python.flask.security.audit.wtf-csrf-disabled.flask-wtf-csrf-disabled.yaml
- python.flask.security.insecure-deserialization.insecure-deserialization.yaml
- python.flask.security.open-redirect.open-redirect.yaml
- python.flask.security.secure-static-file-serve.avoid_send_file_without_path_sanitization.yaml
- python.flask.security.xss.audit.template-href-var.template-href-var.yaml
- python.flask.security.xss.audit.template-unquoted-attribute-var.template-unquoted-attribute-var.yaml
- python.jinja2.security.audit.autoescape-disabled.autoescape-disabled.yaml
- python.lang.security.audit.conn_recv.multiprocessing-recv.yaml
- python.lang.security.audit.dangerous-spawn-process.dangerous-spawn-process.yaml
- python.lang.security.audit.dangerous-system-call.dangerous-system-call.yaml
- python.lang.security.audit.dynamic-urllib-use-detected.dynamic-urllib-use-detected.yaml
- python.lang.security.audit.eval-detected.eval-detected.yaml
- python.lang.security.audit.exec-detected.exec-detected.yaml
- python.lang.security.audit.ftplib.ftplib.yaml
- python.lang.security.audit.httpsconnection-detected.httpsconnection-detected.yaml
- python.lang.security.audit.mako-templates-detected.mako-templates-detected.yaml
- python.lang.security.audit.marshal.marshal-usage.yaml
- python.lang.security.audit.network.bind.avoid-bind-to-all-interfaces.yaml
- python.lang.security.audit.network.disabled-cert-validation.disabled-cert-validation.yaml
- python.lang.security.audit.network.http-not-https-connection.http-not-https-connection.yaml
- python.lang.security.audit.paramiko-implicit-trust-host-key.paramiko-implicit-trust-host-key.yaml
- python.lang.security.audit.paramiko.paramiko-exec-command.paramiko-exec-command.yaml
- python.lang.security.audit.ssl-wrap-socket-is-deprecated.ssl-wrap-socket-is-deprecated.yaml
- python.lang.security.audit.subprocess-shell-true.subprocess-shell-true.yaml
- python.lang.security.audit.system-wildcard-detected.system-wildcard-detected.yaml
- python.lang.security.audit.telnetlib.telnetlib.yaml
- python.lang.security.audit.weak-ssl-version.weak-ssl-version.yaml
- python.lang.security.deserialization.avoid-pyyaml-load.avoid-pyyaml-load.yaml
- python.lang.security.deserialization.avoid-unsafe-ruamel.avoid-unsafe-ruamel.yaml
- python.lang.security.deserialization.pickle.avoid-cPickle.yaml
- python.lang.security.deserialization.pickle.avoid-dill.yaml
- python.lang.security.deserialization.pickle.avoid-pickle.yaml
- python.lang.security.deserialization.pickle.avoid-shelve.yaml
- python.lang.security.insecure-hash-algorithms.insecure-hash-algorithm-md5.yaml
- python.lang.security.insecure-hash-algorithms.insecure-hash-algorithm-sha1.yaml
- python.lang.security.insecure-hash-function.insecure-hash-function.yaml
- python.lang.security.unquoted-csv-writer.unquoted-csv-writer.yaml
- python.lang.security.unverified-ssl-context.unverified-ssl-context.yaml
- python.lang.security.use-defused-xml.use-defused-xml.yaml
- python.lang.security.use-defused-xmlrpc.use-defused-xmlrpc.yaml
- python.pycryptodome.security.insecure-cipher-algorithm.insecure-cipher-algorithm-blowfish.yaml
- python.pycryptodome.security.insecure-cipher-algorithm.insecure-cipher-algorithm-des.yaml
- python.pycryptodome.security.insecure-cipher-algorithm.insecure-cipher-algorithm-rc2.yaml
- python.pycryptodome.security.insecure-cipher-algorithm.insecure-cipher-algorithm-rc4.yaml
- python.pycryptodome.security.insecure-cipher-algorithm.insecure-cipher-algorithm-xor.yaml
- python.pycryptodome.security.insecure-hash-algorithm.insecure-hash-algorithm-md2.yaml
- python.pycryptodome.security.insecure-hash-algorithm.insecure-hash-algorithm-md4.yaml
- python.pycryptodome.security.insecure-hash-algorithm.insecure-hash-algorithm-md5.yaml
- python.pycryptodome.security.insecure-hash-algorithm.insecure-hash-algorithm-sha1.yaml
- python.pycryptodome.security.insufficient-dsa-key-size.insufficient-dsa-key-size.yaml
- python.pycryptodome.security.insufficient-rsa-key-size.insufficient-rsa-key-size.yaml
- python.requests.security.disabled-cert-validation.disabled-cert-validation.yaml
- python.requests.security.no-auth-over-http.no-auth-over-http.yaml

#### Ruby

- ruby.lang.security.dangerous-exec.dangerous-exec.yaml
- ruby.lang.security.dangerous-subshell.dangerous-subshell.yaml
- ruby.lang.security.hardcoded-http-auth-in-controller.hardcoded-http-auth-in-controller.yaml
- ruby.lang.security.mass-assignment-protection-disabled.mass-assignment-protection-disabled.yaml
- ruby.lang.security.missing-csrf-protection.missing-csrf-protection.yaml
- ruby.lang.security.unprotected-mass-assign.mass-assignment-vuln.yaml
- ruby.rails.security.audit.xss.avoid-content-tag.avoid-content-tag.yaml
- ruby.rails.security.audit.xss.avoid-html-safe.avoid-html-safe.yaml
- ruby.rails.security.audit.xss.avoid-raw.avoid-raw.yaml
- ruby.rails.security.audit.xss.avoid-render-inline.avoid-render-inline.yaml
- ruby.rails.security.audit.xss.avoid-render-text.avoid-render-text.yaml
- ruby.rails.security.audit.xss.manual-template-creation.manual-template-creation.yaml
- ruby.rails.security.audit.xss.templates.dangerous-link-to.dangerous-link-to.yaml

#### TypeScript

- typescript.react.security.audit.react-css-injection.react-css-injection.yaml
- typescript.react.security.audit.react-dangerouslysetinnerhtml.react-dangerouslysetinnerhtml.yaml
- typescript.react.security.audit.react-http-leak.react-http-leak.yaml
- typescript.react.security.audit.react-missing-noreferrer.react-missing-noreferrer.yaml
- typescript.react.security.audit.react-props-injection.react-props-injection.yaml
- typescript.react.security.react-insecure-request.react-insecure-request.yaml

### Implementation

BluBracket's code vulnerability scanning is [powered by open source Semgrep](/faq/how-does-blubracket-code-vulnerability-scanning-compare-to-semgrep/), and adds BluBracket workflow and reporting.
