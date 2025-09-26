---
layout:    page
title:     Code
permalink: code
nav_icon:  code
---

## Code Blocks

```
1 != 2 =>= 2 =<= 3
```

```
1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
        10        20        30        40        50        60        70        80        90       100
```



## Inline Code

This is a sentence with inline code: `$group->post($uri, $class, $method)`.



## Syntax Highlighting

### HTML

```html
<!-- HTML Comment -->
<div class="hello">
    dfadsfasdf
</div>
```

### PHP

```php
namespace App\Web\Controllers;

use Attribute;
use Centum\Http\Response;
use Centum\Interfaces\Http\ResponseInterface;
use Centum\Interfaces\Router\ControllerInterface;

/**
 * Docblock comment.
 */
class LoginController implements ControllerInterface
{
    /*
     * Multi-line comment.
     */
    #[Attribute]
    public function form(): ResponseInterface
    {
        // Single line comment.
        return new Response("this is the login page");
    }
}
```

### JSON

```json
{
    "dependencies": {
        "autoprefixer": "^10.4.16",
        "nord":         "^0.2.1",
        "postcss":      "^8.4.32",
        "postcss-cli":  "^11.0.0",
        "sass":         "^1.69.5"
    },
    "scripts": {
        "build":     "sass --no-source-map sass/_.sass:styles.css --style compressed",
        "postbuild": "postcss ./styles.css --use autoprefixer -o styles.css"
    }
}
```

### JavaScript

```js
// Single line comment.
document.querySelector('h1').style.textDecoration = 'underline';
```

### YAML

```yaml
remote_theme: SidRoberts/250926-theme

title: "Centum Docs"

baseurl: "/centum"

copyright: "2021-2025 <a href=\"https://sidroberts.co.uk/\">Sid Roberts</a>"

gh_repository:      "SidRoberts/centum" # optional
gh_dir:             "docs"              # optional
gh_branch:          "main"              # optional
gh_edit_view_mode:  "edit"              # optional
```

### Markdown

```markdown
# Heading 1

This text is *emphasised*.

## Heading 2

This text is **strong**.

---

inline `code`

- asd
- dadw

[e2e12](#)
```



{: .callout.blue }
`Centum\Router\Group` implements `Centum\Interfaces\Router\GroupInterface`.

GET
: `$group->get($uri, $class, $method)`

POST
: `$group->post($uri, $class, $method)`

HEAD
: `$group->head($uri, $class, $method)`

PUT
: `$group->put($uri, $class, $method)`

DELETE
: `$group->delete($uri, $class, $method)`

TRACE
: `$group->trace($uri, $class, $method)`

OPTIONS
: `$group->options($uri, $class, $method)`

CONNECT
: `$group->connect($uri, $class, $method)`

PATCH
: `$group->patch($uri, $class, $method)`
