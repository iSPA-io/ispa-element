export default class DomHandler {
  static innerWidth(el) {
    let width = el.offsetWidth
    const style = getComputedStyle(el)

    width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight)
    return width
  }

  static width(el) {
    let width = el.offsetWidth
    const style = getComputedStyle(el)

    width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight)
    return width
  }

  static getWindowScrollTop() {
    const doc = document.documentElement
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
  }

  static getWindowScrollLeft() {
    const doc = document.documentElement
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0)
  }

  static getOuterWidth(el, margin) {
    if (el) {
      let width = el.offsetWidth

      if (margin) {
        const style = getComputedStyle(el)
        width += parseFloat(style.marginLeft) + parseFloat(style.marginRight)
      }

      return width
    } else {
      return 0
    }
  }

  static getOuterHeight(el, margin) {
    if (el) {
      let height = el.offsetHeight

      if (margin) {
        const style = getComputedStyle(el)
        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom)
      }

      return height
    } else {
      return 0
    }
  }

  static getClientHeight(el, margin) {
    if (el) {
      let height = el.clientHeight

      if (margin) {
        const style = getComputedStyle(el)
        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom)
      }

      return height
    } else {
      return 0
    }
  }

  static getViewport() {
    const win = window
    const d = document
    const e = d.documentElement
    const g = d.getElementsByTagName('body')[0]
    const w = win.innerWidth || e.clientWidth || g.clientWidth
    const h = win.innerHeight || e.clientHeight || g.clientHeight

    return { width: w, height: h }
  }

  static getOffset(el) {
    const rect = el.getBoundingClientRect()

    return {
      top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0),
    }
  }

  static generateZIndex() {
    this.zindex = this.zindex||999
    return ++this.zindex
  }

  static getCurrentZIndex() {
    return this.zindex
  }

  static index(element) {
    const children = element.parentNode.childNodes
    let num = 0
    for (let i = 0; i < children.length; i++) {
      if (children[i] === element) return num
      if (children[i].nodeType === 1) num++
    }
    return -1
  }

  static addMultipleClasses(element, className) {
    if (element.classList) {
      const styles = className.split(' ')
      for (let i = 0; i < styles.length; i++) {
        element.classList.add(styles[i])
      }
    } else {
      const styles = className.split(' ')
      for (let i = 0; i < styles.length; i++) {
        element.className += ' ' + styles[i]
      }
    }
  }

  static addClass(element, className) {
    if (element.classList) {
      element.classList.add(className)
    } else {
      element.className += ' ' + className
    }
  }

  static removeClass(element, className) {
    if (element.classList) {
      element.classList.remove(className)
    } else {
      element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
    }
  }

  static hasClass(element, className) {
    if (element) {
      if (element.classList) {
        return element.classList.contains(className)
      } else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className)
      }
    }

    return false
  }

  static find(element, selector) {
    return element.querySelectorAll(selector)
  }

  static findSingle(element, selector) {
    return element.querySelector(selector)
  }

  static getHeight(el) {
    let height = el.offsetHeight
    const style = getComputedStyle(el)

    height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth)

    return height
  }

  static getWidth(el) {
    let width = el.offsetWidth
    const style = getComputedStyle(el)

    width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth)

    return width
  }

  static absolutePosition(element, target) {
    const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element)
    const elementOuterHeight = elementDimensions.height
    const elementOuterWidth = elementDimensions.width
    const targetOuterHeight = target.offsetHeight
    const targetOuterWidth = target.offsetWidth
    const targetOffset = target.getBoundingClientRect()
    const windowScrollTop = this.getWindowScrollTop()
    const windowScrollLeft = this.getWindowScrollLeft()
    const viewport = this.getViewport()
    let top; let left

    if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
      top = targetOffset.top + windowScrollTop - elementOuterHeight
      element.style.transformOrigin = 'bottom'

      if (top < 0) {
        top = windowScrollTop
      }
    } else {
      top = targetOuterHeight + targetOffset.top + windowScrollTop
      element.style.transformOrigin = 'top'
    }

    if (targetOffset.left + elementOuterWidth > viewport.width) {
      left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth)
    } else {
      left = targetOffset.left + windowScrollLeft
    }

    element.style.top = top + 'px'
    element.style.left = left + 'px'
  }

  static relativePosition(element, target) {
    const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element)
    const targetHeight = target.offsetHeight
    const targetOffset = target.getBoundingClientRect()
    const viewport = this.getViewport()
    let top; let left

    if ((targetOffset.top + targetHeight + elementDimensions.height) > viewport.height) {
      top = -1 * (elementDimensions.height)
      element.style.transformOrigin = 'bottom'
      if (targetOffset.top + top < 0) {
        top = -1 * targetOffset.top
      }
    } else {
      top = targetHeight
      element.style.transformOrigin = 'top'
    }

    if (elementDimensions.width > viewport.width) {
      // element wider then viewport and cannot fit on screen (align at left side of viewport)
      left = targetOffset.left * -1
    } else if ((targetOffset.left + elementDimensions.width) > viewport.width) {
      // element wider then viewport but can be fit on screen (align at right side of viewport)
      left = (targetOffset.left + elementDimensions.width - viewport.width) * -1
    } else {
      // element fits on screen (align with target)
      left = 0
    }

    element.style.top = top + 'px'
    element.style.left = left + 'px'
  }

  static getParents(element, parents = []) {
    return element['parentNode'] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]))
  }

  static getScrollableParents(element) {
    const scrollableParents = []

    if (element) {
      const parents = this.getParents(element)
      const overflowRegex = /(auto|scroll)/
      const overflowCheck = node => {
        const styleDeclaration = window['getComputedStyle'](node, null)
        return overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY'))
      }

      for (const parent of parents) {
        const scrollSelectors = parent.nodeType === 1 && parent.dataset['scrollselectors']
        if (scrollSelectors) {
          const selectors = scrollSelectors.split(',')
          for (const selector of selectors) {
            const el = this.findSingle(parent, selector)
            if (el && overflowCheck(el)) {
              scrollableParents.push(el)
            }
          }
        }
      }
    }

    return scrollableParents
  }

  static getHiddenElementOuterHeight(element) {
    element.style.visibility = 'hidden'
    element.style.display = 'block'
    const elementHeight = element.offsetHeight
    element.style.display = 'none'
    element.style.visibility = 'visible'

    return elementHeight
  }

  static getHiddenElementOuterWidth(element) {
    element.style.visibility = 'hidden'
    element.style.display = 'block'
    const elementWidth = element.offsetWidth
    element.style.display = 'none'
    element.style.visibility = 'visible'

    return elementWidth
  }

  static getHiddenElementDimensions(element) {
    const dimensions = {}
    element.style.visibility = 'hidden'
    element.style.display = 'block'
    dimensions.width = element.offsetWidth
    dimensions.height = element.offsetHeight
    element.style.display = 'none'
    element.style.visibility = 'visible'

    return dimensions
  }

  static fadeIn(element, duration) {
    element.style.opacity = 0

    let last = +new Date()
    let opacity = 0
    var tick = function() {
      opacity = +element.style.opacity + (new Date().getTime() - last) / duration
      element.style.opacity = opacity
      last = +new Date()

      if (+opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
      }
    }

    tick()
  }

  static fadeOut(element, ms) {
    let opacity = 1
    const interval = 50
    const duration = ms
    const gap = interval / duration

    const fading = setInterval(() => {
      opacity -= gap

      if (opacity <= 0) {
        opacity = 0
        clearInterval(fading)
      }

      element.style.opacity = opacity
    }, interval)
  }

  static getUserAgent() {
    return navigator.userAgent
  }

  static appendChild(element, target) {
    if (this.isElement(target)) {
      target.appendChild(element)
    } else if (target.el && target.elElement) {
      target.elElement.appendChild(element)
    } else {
      throw new Error('Cannot append ' + target + ' to ' + element)
    }
  }

  static scrollInView(container, item) {
    const borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth')
    const borderTop = borderTopValue ? parseFloat(borderTopValue) : 0
    const paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop')
    const paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0
    const containerRect = container.getBoundingClientRect()
    const itemRect = item.getBoundingClientRect()
    const offset = (itemRect.top + document.body.scrollTop) - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop
    const scroll = container.scrollTop
    const elementHeight = container.clientHeight
    const itemHeight = this.getOuterHeight(item)

    if (offset < 0) {
      container.scrollTop = scroll + offset
    } else if ((offset + itemHeight) > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight
    }
  }

  static clearSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty()
      } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
        window.getSelection().removeAllRanges()
      }
    } else if (document['selection'] && document['selection'].empty) {
      try {
        document['selection'].empty()
      } catch (error) {
        // ignore IE bug
      }
    }
  }

  static calculateScrollbarWidth() {
    if (this.calculatedScrollbarWidth != null) {
      return this.calculatedScrollbarWidth
    }

    const scrollDiv = document.createElement('div')
    scrollDiv.className = 'i-scrollbar-measure'
    document.body.appendChild(scrollDiv)

    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    document.body.removeChild(scrollDiv)

    this.calculatedScrollbarWidth = scrollbarWidth

    return scrollbarWidth
  }

  static getBrowser() {
    if (!this.browser) {
      const matched = this.resolveUserAgent()
      this.browser = {}

      if (matched.browser) {
        this.browser[matched.browser] = true
        this.browser['version'] = matched.version
      }

      if (this.browser['chrome']) {
        this.browser['webkit'] = true
      } else if (this.browser['webkit']) {
        this.browser['safari'] = true
      }
    }

    return this.browser
  }

  static resolveUserAgent() {
    const ua = navigator.userAgent.toLowerCase()
    const match = /(chrome)[ ]([\w.]+)/.exec(ua) ||
            /(webkit)[ ]([\w.]+)/.exec(ua) ||
            /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) ||
            /(msie) ([\w.]+)/.exec(ua) ||
            (ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)) ||
            []

    return {
      browser: match[1] || '',
      version: match[2] || '0',
    }
  }

  static isVisible(element) {
    return element.offsetParent != null
  }

  static invokeElementMethod(element, methodName, args) {
    (element)[methodName].apply(element, args)
  }

  static getFocusableElements(element) {
    const focusableElements = DomHandler.find(element, `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`,
    )

    const visibleFocusableElements = []
    for (const focusableElement of focusableElements) {
      if (getComputedStyle(focusableElement).display != 'none' && getComputedStyle(focusableElement).visibility != 'hidden') {
        visibleFocusableElements.push(focusableElement)
      }
    }

    return visibleFocusableElements
  }

  static isClickable(element) {
    const targetNode = element.nodeName
    const parentNode = element.parentElement && element.parentElement.nodeName

    return (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' ||
                parentNode == 'INPUT' || parentNode == 'BUTTON' || parentNode == 'A' ||
                this.hasClass(element, 'i-button') || this.hasClass(element.parentElement, 'i-button') ||
                this.hasClass(element.parentElement, 'i-checkbox') || this.hasClass(element.parentElement, 'i-radiobutton')
    )
  }
}
