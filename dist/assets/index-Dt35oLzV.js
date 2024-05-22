;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r)
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === 'childList')
        for (const i of o.addedNodes) i.tagName === 'LINK' && i.rel === 'modulepreload' && s(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(r) {
    const o = {}
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : r.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    )
  }
  function s(r) {
    if (r.ep) return
    r.ep = !0
    const o = n(r)
    fetch(r.href, o)
  }
})()
/**
 * @vue/shared v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function ws(e, t) {
  const n = new Set(e.split(','))
  return t ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s)
}
const ne = {},
  St = [],
  Pe = () => {},
  ii = () => !1,
  Pn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Es = (e) => e.startsWith('onUpdate:'),
  ae = Object.assign,
  xs = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  li = Object.prototype.hasOwnProperty,
  q = (e, t) => li.call(e, t),
  F = Array.isArray,
  Pt = (e) => On(e) === '[object Map]',
  zr = (e) => On(e) === '[object Set]',
  V = (e) => typeof e == 'function',
  de = (e) => typeof e == 'string',
  Lt = (e) => typeof e == 'symbol',
  oe = (e) => e !== null && typeof e == 'object',
  Wr = (e) => (oe(e) || V(e)) && V(e.then) && V(e.catch),
  qr = Object.prototype.toString,
  On = (e) => qr.call(e),
  ci = (e) => On(e).slice(8, -1),
  Gr = (e) => On(e) === '[object Object]',
  Cs = (e) => de(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Ut = ws(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  An = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  ui = /-(\w)/g,
  Te = An((e) => e.replace(ui, (t, n) => (n ? n.toUpperCase() : ''))),
  fi = /\B([A-Z])/g,
  lt = An((e) => e.replace(fi, '-$1').toLowerCase()),
  In = An((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Dn = An((e) => (e ? `on${In(e)}` : '')),
  Ve = (e, t) => !Object.is(e, t),
  an = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  _n = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  is = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Gs
const Qr = () =>
  Gs ||
  (Gs =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function Rs(e) {
  if (F(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = de(s) ? pi(s) : Rs(s)
      if (r) for (const o in r) t[o] = r[o]
    }
    return t
  } else if (de(e) || oe(e)) return e
}
const ai = /;(?![^(]*\))/g,
  di = /:([^]+)/,
  hi = /\/\*[^]*?\*\//g
function pi(e) {
  const t = {}
  return (
    e
      .replace(hi, '')
      .split(ai)
      .forEach((n) => {
        if (n) {
          const s = n.split(di)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function mt(e) {
  let t = ''
  if (de(e)) t = e
  else if (F(e))
    for (let n = 0; n < e.length; n++) {
      const s = mt(e[n])
      s && (t += s + ' ')
    }
  else if (oe(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const gi = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  mi = ws(gi)
function Yr(e) {
  return !!e || e === ''
}
const yn = (e) =>
    de(e)
      ? e
      : e == null
        ? ''
        : F(e) || (oe(e) && (e.toString === qr || !V(e.toString)))
          ? JSON.stringify(e, Jr, 2)
          : String(e),
  Jr = (e, t) =>
    t && t.__v_isRef
      ? Jr(e, t.value)
      : Pt(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], o) => ((n[zn(s, o) + ' =>'] = r), n),
              {}
            )
          }
        : zr(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => zn(n)) }
          : Lt(t)
            ? zn(t)
            : oe(t) && !F(t) && !Gr(t)
              ? String(t)
              : t,
  zn = (e, t = '') => {
    var n
    return Lt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ae
class Xr {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ae),
      !t && Ae && (this.index = (Ae.scopes || (Ae.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = Ae
      try {
        return (Ae = this), t()
      } finally {
        Ae = n
      }
    }
  }
  on() {
    Ae = this
  }
  off() {
    Ae = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (this.scopes) for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function _i(e) {
  return new Xr(e)
}
function yi(e, t = Ae) {
  t && t.active && t.effects.push(e)
}
function bi() {
  return Ae
}
let pt
class Ss {
  constructor(t, n, s, r) {
    ;(this.fn = t),
      (this.trigger = n),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      yi(this, r)
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      ;(this._dirtyLevel = 1), _t()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (vi(n.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), yt()
    }
    return this._dirtyLevel >= 4
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = rt,
      n = pt
    try {
      return (rt = !0), (pt = this), this._runnings++, Qs(this), this.fn()
    } finally {
      Ys(this), this._runnings--, (pt = n), (rt = t)
    }
  }
  stop() {
    var t
    this.active &&
      (Qs(this), Ys(this), (t = this.onStop) == null || t.call(this), (this.active = !1))
  }
}
function vi(e) {
  return e.value
}
function Qs(e) {
  e._trackId++, (e._depsLength = 0)
}
function Ys(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Zr(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Zr(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let rt = !0,
  ls = 0
const eo = []
function _t() {
  eo.push(rt), (rt = !1)
}
function yt() {
  const e = eo.pop()
  rt = e === void 0 ? !0 : e
}
function Ps() {
  ls++
}
function Os() {
  for (ls--; !ls && cs.length; ) cs.shift()()
}
function to(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const s = e.deps[e._depsLength]
    s !== t ? (s && Zr(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const cs = []
function no(e, t, n) {
  Ps()
  for (const s of e.keys()) {
    let r
    s._dirtyLevel < t &&
      (r ?? (r = e.get(s) === s._trackId)) &&
      (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), (s._dirtyLevel = t)),
      s._shouldSchedule &&
        (r ?? (r = e.get(s) === s._trackId)) &&
        (s.trigger(),
        (!s._runnings || s.allowRecurse) &&
          s._dirtyLevel !== 2 &&
          ((s._shouldSchedule = !1), s.scheduler && cs.push(s.scheduler)))
  }
  Os()
}
const so = (e, t) => {
    const n = new Map()
    return (n.cleanup = e), (n.computed = t), n
  },
  us = new WeakMap(),
  gt = Symbol(''),
  fs = Symbol('')
function Ce(e, t, n) {
  if (rt && pt) {
    let s = us.get(e)
    s || us.set(e, (s = new Map()))
    let r = s.get(n)
    r || s.set(n, (r = so(() => s.delete(n)))), to(pt, r)
  }
}
function ze(e, t, n, s, r, o) {
  const i = us.get(e)
  if (!i) return
  let u = []
  if (t === 'clear') u = [...i.values()]
  else if (n === 'length' && F(e)) {
    const l = Number(s)
    i.forEach((d, f) => {
      ;(f === 'length' || (!Lt(f) && f >= l)) && u.push(d)
    })
  } else
    switch ((n !== void 0 && u.push(i.get(n)), t)) {
      case 'add':
        F(e) ? Cs(n) && u.push(i.get('length')) : (u.push(i.get(gt)), Pt(e) && u.push(i.get(fs)))
        break
      case 'delete':
        F(e) || (u.push(i.get(gt)), Pt(e) && u.push(i.get(fs)))
        break
      case 'set':
        Pt(e) && u.push(i.get(gt))
        break
    }
  Ps()
  for (const l of u) l && no(l, 4)
  Os()
}
const wi = ws('__proto__,__v_isRef,__isVue'),
  ro = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Lt)
  ),
  Js = Ei()
function Ei() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const s = G(this)
        for (let o = 0, i = this.length; o < i; o++) Ce(s, 'get', o + '')
        const r = s[t](...n)
        return r === -1 || r === !1 ? s[t](...n.map(G)) : r
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        _t(), Ps()
        const s = G(this)[t].apply(this, n)
        return Os(), yt(), s
      }
    }),
    e
  )
}
function xi(e) {
  const t = G(this)
  return Ce(t, 'has', e), t.hasOwnProperty(e)
}
class oo {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    const r = this._isReadonly,
      o = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return o
    if (n === '__v_raw')
      return s === (r ? (o ? Fi : uo) : o ? co : lo).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const i = F(t)
    if (!r) {
      if (i && q(Js, n)) return Reflect.get(Js, n, s)
      if (n === 'hasOwnProperty') return xi
    }
    const u = Reflect.get(t, n, s)
    return (Lt(n) ? ro.has(n) : wi(n)) || (r || Ce(t, 'get', n), o)
      ? u
      : pe(u)
        ? i && Cs(n)
          ? u
          : u.value
        : oe(u)
          ? r
            ? ao(u)
            : Tn(u)
          : u
  }
}
class io extends oo {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let o = t[n]
    if (!this._isShallow) {
      const l = It(o)
      if ((!bn(s) && !It(s) && ((o = G(o)), (s = G(s))), !F(t) && pe(o) && !pe(s)))
        return l ? !1 : ((o.value = s), !0)
    }
    const i = F(t) && Cs(n) ? Number(n) < t.length : q(t, n),
      u = Reflect.set(t, n, s, r)
    return t === G(r) && (i ? Ve(s, o) && ze(t, 'set', n, s) : ze(t, 'add', n, s)), u
  }
  deleteProperty(t, n) {
    const s = q(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return r && s && ze(t, 'delete', n, void 0), r
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!Lt(n) || !ro.has(n)) && Ce(t, 'has', n), s
  }
  ownKeys(t) {
    return Ce(t, 'iterate', F(t) ? 'length' : gt), Reflect.ownKeys(t)
  }
}
class Ci extends oo {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const Ri = new io(),
  Si = new Ci(),
  Pi = new io(!0),
  As = (e) => e,
  $n = (e) => Reflect.getPrototypeOf(e)
function rn(e, t, n = !1, s = !1) {
  e = e.__v_raw
  const r = G(e),
    o = G(t)
  n || (Ve(t, o) && Ce(r, 'get', t), Ce(r, 'get', o))
  const { has: i } = $n(r),
    u = s ? As : n ? Ms : Yt
  if (i.call(r, t)) return u(e.get(t))
  if (i.call(r, o)) return u(e.get(o))
  e !== r && e.get(t)
}
function on(e, t = !1) {
  const n = this.__v_raw,
    s = G(n),
    r = G(e)
  return (
    t || (Ve(e, r) && Ce(s, 'has', e), Ce(s, 'has', r)), e === r ? n.has(e) : n.has(e) || n.has(r)
  )
}
function ln(e, t = !1) {
  return (e = e.__v_raw), !t && Ce(G(e), 'iterate', gt), Reflect.get(e, 'size', e)
}
function Xs(e) {
  e = G(e)
  const t = G(this)
  return $n(t).has.call(t, e) || (t.add(e), ze(t, 'add', e, e)), this
}
function Zs(e, t) {
  t = G(t)
  const n = G(this),
    { has: s, get: r } = $n(n)
  let o = s.call(n, e)
  o || ((e = G(e)), (o = s.call(n, e)))
  const i = r.call(n, e)
  return n.set(e, t), o ? Ve(t, i) && ze(n, 'set', e, t) : ze(n, 'add', e, t), this
}
function er(e) {
  const t = G(this),
    { has: n, get: s } = $n(t)
  let r = n.call(t, e)
  r || ((e = G(e)), (r = n.call(t, e))), s && s.call(t, e)
  const o = t.delete(e)
  return r && ze(t, 'delete', e, void 0), o
}
function tr() {
  const e = G(this),
    t = e.size !== 0,
    n = e.clear()
  return t && ze(e, 'clear', void 0, void 0), n
}
function cn(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      u = G(i),
      l = t ? As : e ? Ms : Yt
    return !e && Ce(u, 'iterate', gt), i.forEach((d, f) => s.call(r, l(d), l(f), o))
  }
}
function un(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = G(r),
      i = Pt(o),
      u = e === 'entries' || (e === Symbol.iterator && i),
      l = e === 'keys' && i,
      d = r[e](...s),
      f = n ? As : t ? Ms : Yt
    return (
      !t && Ce(o, 'iterate', l ? fs : gt),
      {
        next() {
          const { value: h, done: p } = d.next()
          return p ? { value: h, done: p } : { value: u ? [f(h[0]), f(h[1])] : f(h), done: p }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function Je(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function Oi() {
  const e = {
      get(o) {
        return rn(this, o)
      },
      get size() {
        return ln(this)
      },
      has: on,
      add: Xs,
      set: Zs,
      delete: er,
      clear: tr,
      forEach: cn(!1, !1)
    },
    t = {
      get(o) {
        return rn(this, o, !1, !0)
      },
      get size() {
        return ln(this)
      },
      has: on,
      add: Xs,
      set: Zs,
      delete: er,
      clear: tr,
      forEach: cn(!1, !0)
    },
    n = {
      get(o) {
        return rn(this, o, !0)
      },
      get size() {
        return ln(this, !0)
      },
      has(o) {
        return on.call(this, o, !0)
      },
      add: Je('add'),
      set: Je('set'),
      delete: Je('delete'),
      clear: Je('clear'),
      forEach: cn(!0, !1)
    },
    s = {
      get(o) {
        return rn(this, o, !0, !0)
      },
      get size() {
        return ln(this, !0)
      },
      has(o) {
        return on.call(this, o, !0)
      },
      add: Je('add'),
      set: Je('set'),
      delete: Je('delete'),
      clear: Je('clear'),
      forEach: cn(!0, !0)
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((o) => {
      ;(e[o] = un(o, !1, !1)),
        (n[o] = un(o, !0, !1)),
        (t[o] = un(o, !1, !0)),
        (s[o] = un(o, !0, !0))
    }),
    [e, n, t, s]
  )
}
const [Ai, Ii, $i, Ti] = Oi()
function Is(e, t) {
  const n = t ? (e ? Ti : $i) : e ? Ii : Ai
  return (s, r, o) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(q(n, r) && r in s ? n : s, r, o)
}
const Mi = { get: Is(!1, !1) },
  Li = { get: Is(!1, !0) },
  Ni = { get: Is(!0, !1) },
  lo = new WeakMap(),
  co = new WeakMap(),
  uo = new WeakMap(),
  Fi = new WeakMap()
function Bi(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function ji(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Bi(ci(e))
}
function Tn(e) {
  return It(e) ? e : $s(e, !1, Ri, Mi, lo)
}
function fo(e) {
  return $s(e, !1, Pi, Li, co)
}
function ao(e) {
  return $s(e, !0, Si, Ni, uo)
}
function $s(e, t, n, s, r) {
  if (!oe(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const o = r.get(e)
  if (o) return o
  const i = ji(e)
  if (i === 0) return e
  const u = new Proxy(e, i === 2 ? s : n)
  return r.set(e, u), u
}
function Ot(e) {
  return It(e) ? Ot(e.__v_raw) : !!(e && e.__v_isReactive)
}
function It(e) {
  return !!(e && e.__v_isReadonly)
}
function bn(e) {
  return !!(e && e.__v_isShallow)
}
function ho(e) {
  return Ot(e) || It(e)
}
function G(e) {
  const t = e && e.__v_raw
  return t ? G(t) : e
}
function Ts(e) {
  return Object.isExtensible(e) && _n(e, '__v_skip', !0), e
}
const Yt = (e) => (oe(e) ? Tn(e) : e),
  Ms = (e) => (oe(e) ? ao(e) : e)
class po {
  constructor(t, n, s, r) {
    ;(this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Ss(
        () => t(this._value),
        () => Kt(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s)
  }
  get value() {
    const t = G(this)
    return (
      (!t._cacheable || t.effect.dirty) && Ve(t._value, (t._value = t.effect.run())) && Kt(t, 4),
      Ls(t),
      t.effect._dirtyLevel >= 2 && Kt(t, 2),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
  get _dirty() {
    return this.effect.dirty
  }
  set _dirty(t) {
    this.effect.dirty = t
  }
}
function ki(e, t, n = !1) {
  let s, r
  const o = V(e)
  return o ? ((s = e), (r = Pe)) : ((s = e.get), (r = e.set)), new po(s, r, o || !r, n)
}
function Ls(e) {
  var t
  rt &&
    pt &&
    ((e = G(e)),
    to(
      pt,
      (t = e.dep) != null ? t : (e.dep = so(() => (e.dep = void 0), e instanceof po ? e : void 0))
    ))
}
function Kt(e, t = 4, n) {
  e = G(e)
  const s = e.dep
  s && no(s, t)
}
function pe(e) {
  return !!(e && e.__v_isRef === !0)
}
function Mn(e) {
  return go(e, !1)
}
function Hi(e) {
  return go(e, !0)
}
function go(e, t) {
  return pe(e) ? e : new Vi(e, t)
}
class Vi {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : G(t)),
      (this._value = n ? t : Yt(t))
  }
  get value() {
    return Ls(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || bn(t) || It(t)
    ;(t = n ? t : G(t)),
      Ve(t, this._rawValue) && ((this._rawValue = t), (this._value = n ? t : Yt(t)), Kt(this, 4))
  }
}
function k(e) {
  return pe(e) ? e.value : e
}
const Ui = {
  get: (e, t, n) => k(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t]
    return pe(r) && !pe(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  }
}
function mo(e) {
  return Ot(e) ? e : new Proxy(e, Ui)
}
class Ki {
  constructor(t) {
    ;(this.dep = void 0), (this.__v_isRef = !0)
    const { get: n, set: s } = t(
      () => Ls(this),
      () => Kt(this)
    )
    ;(this._get = n), (this._set = s)
  }
  get value() {
    return this._get()
  }
  set value(t) {
    this._set(t)
  }
}
function Di(e) {
  return new Ki(e)
}
/**
 * @vue/runtime-core v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function ot(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    Ln(r, t, n)
  }
}
function $e(e, t, n, s) {
  if (V(e)) {
    const o = ot(e, t, n, s)
    return (
      o &&
        Wr(o) &&
        o.catch((i) => {
          Ln(i, t, n)
        }),
      o
    )
  }
  const r = []
  for (let o = 0; o < e.length; o++) r.push($e(e[o], t, n, s))
  return r
}
function Ln(e, t, n, s = !0) {
  const r = t ? t.vnode : null
  if (t) {
    let o = t.parent
    const i = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; o; ) {
      const d = o.ec
      if (d) {
        for (let f = 0; f < d.length; f++) if (d[f](e, i, u) === !1) return
      }
      o = o.parent
    }
    const l = t.appContext.config.errorHandler
    if (l) {
      ot(l, null, 10, [e, i, u])
      return
    }
  }
  zi(e, n, r, s)
}
function zi(e, t, n, s = !0) {
  console.error(e)
}
let Jt = !1,
  as = !1
const _e = []
let He = 0
const At = []
let Ze = null,
  dt = 0
const _o = Promise.resolve()
let Ns = null
function yo(e) {
  const t = Ns || _o
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Wi(e) {
  let t = He + 1,
    n = _e.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = _e[s],
      o = Xt(r)
    o < e || (o === e && r.pre) ? (t = s + 1) : (n = s)
  }
  return t
}
function Fs(e) {
  ;(!_e.length || !_e.includes(e, Jt && e.allowRecurse ? He + 1 : He)) &&
    (e.id == null ? _e.push(e) : _e.splice(Wi(e.id), 0, e), bo())
}
function bo() {
  !Jt && !as && ((as = !0), (Ns = _o.then(wo)))
}
function qi(e) {
  const t = _e.indexOf(e)
  t > He && _e.splice(t, 1)
}
function Gi(e) {
  F(e) ? At.push(...e) : (!Ze || !Ze.includes(e, e.allowRecurse ? dt + 1 : dt)) && At.push(e), bo()
}
function nr(e, t, n = Jt ? He + 1 : 0) {
  for (; n < _e.length; n++) {
    const s = _e[n]
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue
      _e.splice(n, 1), n--, s()
    }
  }
}
function vo(e) {
  if (At.length) {
    const t = [...new Set(At)].sort((n, s) => Xt(n) - Xt(s))
    if (((At.length = 0), Ze)) {
      Ze.push(...t)
      return
    }
    for (Ze = t, dt = 0; dt < Ze.length; dt++) Ze[dt]()
    ;(Ze = null), (dt = 0)
  }
}
const Xt = (e) => (e.id == null ? 1 / 0 : e.id),
  Qi = (e, t) => {
    const n = Xt(e) - Xt(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function wo(e) {
  ;(as = !1), (Jt = !0), _e.sort(Qi)
  try {
    for (He = 0; He < _e.length; He++) {
      const t = _e[He]
      t && t.active !== !1 && ot(t, null, 14)
    }
  } finally {
    ;(He = 0), (_e.length = 0), vo(), (Jt = !1), (Ns = null), (_e.length || At.length) && wo()
  }
}
function Yi(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || ne
  let r = n
  const o = t.startsWith('update:'),
    i = o && t.slice(7)
  if (i && i in s) {
    const f = `${i === 'modelValue' ? 'model' : i}Modifiers`,
      { number: h, trim: p } = s[f] || ne
    p && (r = n.map((m) => (de(m) ? m.trim() : m))), h && (r = n.map(is))
  }
  let u,
    l = s[(u = Dn(t))] || s[(u = Dn(Te(t)))]
  !l && o && (l = s[(u = Dn(lt(t)))]), l && $e(l, e, 6, r)
  const d = s[u + 'Once']
  if (d) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[u]) return
    ;(e.emitted[u] = !0), $e(d, e, 6, r)
  }
}
function Eo(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const o = e.emits
  let i = {},
    u = !1
  if (!V(e)) {
    const l = (d) => {
      const f = Eo(d, t, !0)
      f && ((u = !0), ae(i, f))
    }
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l)
  }
  return !o && !u
    ? (oe(e) && s.set(e, null), null)
    : (F(o) ? o.forEach((l) => (i[l] = null)) : ae(i, o), oe(e) && s.set(e, i), i)
}
function Nn(e, t) {
  return !e || !Pn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      q(e, t[0].toLowerCase() + t.slice(1)) || q(e, lt(t)) || q(e, t))
}
let ce = null,
  Fn = null
function vn(e) {
  const t = ce
  return (ce = e), (Fn = (e && e.type.__scopeId) || null), t
}
function xo(e) {
  Fn = e
}
function Co() {
  Fn = null
}
function N(e, t = ce, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && hr(-1)
    const o = vn(t)
    let i
    try {
      i = e(...r)
    } finally {
      vn(o), s._d && hr(1)
    }
    return i
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function Wn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: u,
    attrs: l,
    emit: d,
    render: f,
    renderCache: h,
    data: p,
    setupState: m,
    ctx: S,
    inheritAttrs: $
  } = e
  let H, T
  const B = vn(e)
  try {
    if (n.shapeFlag & 4) {
      const Q = r || s,
        ie = Q
      ;(H = ke(f.call(ie, Q, h, o, m, p, S))), (T = l)
    } else {
      const Q = t
      ;(H = ke(Q.length > 1 ? Q(o, { attrs: l, slots: u, emit: d }) : Q(o, null))),
        (T = t.props ? l : Ji(l))
    }
  } catch (Q) {
    ;(qt.length = 0), Ln(Q, e, 1), (H = I(it))
  }
  let U = H
  if (T && $ !== !1) {
    const Q = Object.keys(T),
      { shapeFlag: ie } = U
    Q.length && ie & 7 && (i && Q.some(Es) && (T = Xi(T, i)), (U = $t(U, T)))
  }
  return (
    n.dirs && ((U = $t(U)), (U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (U.transition = n.transition),
    (H = U),
    vn(B),
    H
  )
}
const Ji = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || Pn(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Xi = (e, t) => {
    const n = {}
    for (const s in e) (!Es(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function Zi(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: u, patchFlag: l } = t,
    d = o.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && l >= 0) {
    if (l & 1024) return !0
    if (l & 16) return s ? sr(s, i, d) : !!i
    if (l & 8) {
      const f = t.dynamicProps
      for (let h = 0; h < f.length; h++) {
        const p = f[h]
        if (i[p] !== s[p] && !Nn(d, p)) return !0
      }
    }
  } else
    return (r || u) && (!u || !u.$stable) ? !0 : s === i ? !1 : s ? (i ? sr(s, i, d) : !0) : !!i
  return !1
}
function sr(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const o = s[r]
    if (t[o] !== e[o] && !Nn(n, o)) return !0
  }
  return !1
}
function el({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Ro = 'components'
function dn(e, t) {
  return nl(Ro, e, !0, t) || e
}
const tl = Symbol.for('v-ndc')
function nl(e, t, n = !0, s = !1) {
  const r = ce || he
  if (r) {
    const o = r.type
    if (e === Ro) {
      const u = Yl(o, !1)
      if (u && (u === t || u === Te(t) || u === In(Te(t)))) return o
    }
    const i = rr(r[e] || o[e], t) || rr(r.appContext[e], t)
    return !i && s ? o : i
  }
}
function rr(e, t) {
  return e && (e[t] || e[Te(t)] || e[In(Te(t))])
}
const sl = (e) => e.__isSuspense
function rl(e, t) {
  t && t.pendingBranch ? (F(e) ? t.effects.push(...e) : t.effects.push(e)) : Gi(e)
}
const ol = Symbol.for('v-scx'),
  il = () => We(ol)
function ll(e, t) {
  return Bs(e, null, { flush: 'sync' })
}
const fn = {}
function hn(e, t, n) {
  return Bs(e, t, n)
}
function Bs(e, t, { immediate: n, deep: s, flush: r, once: o, onTrack: i, onTrigger: u } = ne) {
  if (t && o) {
    const K = t
    t = (...ye) => {
      K(...ye), ie()
    }
  }
  const l = he,
    d = (K) => (s === !0 ? K : ht(K, s === !1 ? 1 : void 0))
  let f,
    h = !1,
    p = !1
  if (
    (pe(e)
      ? ((f = () => e.value), (h = bn(e)))
      : Ot(e)
        ? ((f = () => d(e)), (h = !0))
        : F(e)
          ? ((p = !0),
            (h = e.some((K) => Ot(K) || bn(K))),
            (f = () =>
              e.map((K) => {
                if (pe(K)) return K.value
                if (Ot(K)) return d(K)
                if (V(K)) return ot(K, l, 2)
              })))
          : V(e)
            ? t
              ? (f = () => ot(e, l, 2))
              : (f = () => (m && m(), $e(e, l, 3, [S])))
            : (f = Pe),
    t && s)
  ) {
    const K = f
    f = () => ht(K())
  }
  let m,
    S = (K) => {
      m = U.onStop = () => {
        ot(K, l, 4), (m = U.onStop = void 0)
      }
    },
    $
  if (Hn)
    if (((S = Pe), t ? n && $e(t, l, 3, [f(), p ? [] : void 0, S]) : f(), r === 'sync')) {
      const K = il()
      $ = K.__watcherHandles || (K.__watcherHandles = [])
    } else return Pe
  let H = p ? new Array(e.length).fill(fn) : fn
  const T = () => {
    if (!(!U.active || !U.dirty))
      if (t) {
        const K = U.run()
        ;(s || h || (p ? K.some((ye, Se) => Ve(ye, H[Se])) : Ve(K, H))) &&
          (m && m(), $e(t, l, 3, [K, H === fn ? void 0 : p && H[0] === fn ? [] : H, S]), (H = K))
      } else U.run()
  }
  T.allowRecurse = !!t
  let B
  r === 'sync'
    ? (B = T)
    : r === 'post'
      ? (B = () => we(T, l && l.suspense))
      : ((T.pre = !0), l && (T.id = l.uid), (B = () => Fs(T)))
  const U = new Ss(f, Pe, B),
    Q = bi(),
    ie = () => {
      U.stop(), Q && xs(Q.effects, U)
    }
  return (
    t ? (n ? T() : (H = U.run())) : r === 'post' ? we(U.run.bind(U), l && l.suspense) : U.run(),
    $ && $.push(ie),
    ie
  )
}
function cl(e, t, n) {
  const s = this.proxy,
    r = de(e) ? (e.includes('.') ? So(s, e) : () => s[e]) : e.bind(s, s)
  let o
  V(t) ? (o = t) : ((o = t.handler), (n = t))
  const i = nn(this),
    u = Bs(r, o.bind(s), n)
  return i(), u
}
function So(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
function ht(e, t, n = 0, s) {
  if (!oe(e) || e.__v_skip) return e
  if (t && t > 0) {
    if (n >= t) return e
    n++
  }
  if (((s = s || new Set()), s.has(e))) return e
  if ((s.add(e), pe(e))) ht(e.value, t, n, s)
  else if (F(e)) for (let r = 0; r < e.length; r++) ht(e[r], t, n, s)
  else if (zr(e) || Pt(e))
    e.forEach((r) => {
      ht(r, t, n, s)
    })
  else if (Gr(e)) for (const r in e) ht(e[r], t, n, s)
  return e
}
function Po(e, t) {
  if (ce === null) return e
  const n = Vn(ce) || ce.proxy,
    s = e.dirs || (e.dirs = [])
  for (let r = 0; r < t.length; r++) {
    let [o, i, u, l = ne] = t[r]
    o &&
      (V(o) && (o = { mounted: o, updated: o }),
      o.deep && ht(i),
      s.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: u, modifiers: l }))
  }
  return e
}
function ft(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs
  for (let i = 0; i < r.length; i++) {
    const u = r[i]
    o && (u.oldValue = o[i].value)
    let l = u.dir[s]
    l && (_t(), $e(l, n, 8, [e.el, u, e, t]), yt())
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function bt(e, t) {
  return V(e) ? ae({ name: e.name }, t, { setup: e }) : e
}
const Dt = (e) => !!e.type.__asyncLoader,
  Oo = (e) => e.type.__isKeepAlive
function ul(e, t) {
  Ao(e, 'a', t)
}
function fl(e, t) {
  Ao(e, 'da', t)
}
function Ao(e, t, n = he) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((Bn(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) Oo(r.parent.vnode) && al(s, t, n, r), (r = r.parent)
  }
}
function al(e, t, n, s) {
  const r = Bn(t, e, s, !0)
  $o(() => {
    xs(s[t], r)
  }, n)
}
function Bn(e, t, n = he, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return
          _t()
          const u = nn(n),
            l = $e(t, n, e, i)
          return u(), yt(), l
        })
    return s ? r.unshift(o) : r.push(o), o
  }
}
const qe =
    (e) =>
    (t, n = he) =>
      (!Hn || e === 'sp') && Bn(e, (...s) => t(...s), n),
  dl = qe('bm'),
  Io = qe('m'),
  hl = qe('bu'),
  pl = qe('u'),
  gl = qe('bum'),
  $o = qe('um'),
  ml = qe('sp'),
  _l = qe('rtg'),
  yl = qe('rtc')
function bl(e, t = he) {
  Bn('ec', e, t)
}
function De(e, t, n = {}, s, r) {
  if (ce.isCE || (ce.parent && Dt(ce.parent) && ce.parent.isCE))
    return t !== 'default' && (n.name = t), I('slot', n, s && s())
  let o = e[t]
  o && o._c && (o._d = !1), le()
  const i = o && To(o(n)),
    u = Hs(
      Ee,
      { key: n.key || (i && i.key) || `_${t}` },
      i || (s ? s() : []),
      i && e._ === 1 ? 64 : -2
    )
  return !r && u.scopeId && (u.slotScopeIds = [u.scopeId + '-s']), o && o._c && (o._d = !0), u
}
function To(e) {
  return e.some((t) => (xn(t) ? !(t.type === it || (t.type === Ee && !To(t.children))) : !0))
    ? e
    : null
}
const ds = (e) => (e ? (Do(e) ? Vn(e) || e.proxy : ds(e.parent)) : null),
  zt = ae(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ds(e.parent),
    $root: (e) => ds(e.root),
    $emit: (e) => e.emit,
    $options: (e) => js(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), Fs(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = yo.bind(e.proxy)),
    $watch: (e) => cl.bind(e)
  }),
  qn = (e, t) => e !== ne && !e.__isScriptSetup && q(e, t),
  vl = {
    get({ _: e }, t) {
      const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: u, appContext: l } = e
      let d
      if (t[0] !== '$') {
        const m = i[t]
        if (m !== void 0)
          switch (m) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return o[t]
          }
        else {
          if (qn(s, t)) return (i[t] = 1), s[t]
          if (r !== ne && q(r, t)) return (i[t] = 2), r[t]
          if ((d = e.propsOptions[0]) && q(d, t)) return (i[t] = 3), o[t]
          if (n !== ne && q(n, t)) return (i[t] = 4), n[t]
          hs && (i[t] = 0)
        }
      }
      const f = zt[t]
      let h, p
      if (f) return t === '$attrs' && Ce(e, 'get', t), f(e)
      if ((h = u.__cssModules) && (h = h[t])) return h
      if (n !== ne && q(n, t)) return (i[t] = 4), n[t]
      if (((p = l.config.globalProperties), q(p, t))) return p[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e
      return qn(r, t)
        ? ((r[t] = n), !0)
        : s !== ne && q(s, t)
          ? ((s[t] = n), !0)
          : q(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((o[t] = n), !0)
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o } },
      i
    ) {
      let u
      return (
        !!n[i] ||
        (e !== ne && q(e, i)) ||
        qn(t, i) ||
        ((u = o[0]) && q(u, i)) ||
        q(s, i) ||
        q(zt, i) ||
        q(r.config.globalProperties, i)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : q(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    }
  }
function wn(e) {
  return F(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
function or(e, t) {
  return !e || !t ? e || t : F(e) && F(t) ? e.concat(t) : ae({}, wn(e), wn(t))
}
let hs = !0
function wl(e) {
  const t = js(e),
    n = e.proxy,
    s = e.ctx
  ;(hs = !1), t.beforeCreate && ir(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: o,
    methods: i,
    watch: u,
    provide: l,
    inject: d,
    created: f,
    beforeMount: h,
    mounted: p,
    beforeUpdate: m,
    updated: S,
    activated: $,
    deactivated: H,
    beforeDestroy: T,
    beforeUnmount: B,
    destroyed: U,
    unmounted: Q,
    render: ie,
    renderTracked: K,
    renderTriggered: ye,
    errorCaptured: Se,
    serverPrefetch: ct,
    expose: Le,
    inheritAttrs: Qe,
    components: ut,
    directives: Ne,
    filters: Nt
  } = t
  if ((d && El(d, s, null), i))
    for (const Z in i) {
      const Y = i[Z]
      V(Y) && (s[Z] = Y.bind(n))
    }
  if (r) {
    const Z = r.call(n, n)
    oe(Z) && (e.data = Tn(Z))
  }
  if (((hs = !0), o))
    for (const Z in o) {
      const Y = o[Z],
        Ue = V(Y) ? Y.bind(n, n) : V(Y.get) ? Y.get.bind(n, n) : Pe,
        Ye = !V(Y) && V(Y.set) ? Y.set.bind(n) : Pe,
        Fe = xe({ get: Ue, set: Ye })
      Object.defineProperty(s, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => Fe.value,
        set: (ve) => (Fe.value = ve)
      })
    }
  if (u) for (const Z in u) Mo(u[Z], s, n, Z)
  if (l) {
    const Z = V(l) ? l.call(n) : l
    Reflect.ownKeys(Z).forEach((Y) => {
      pn(Y, Z[Y])
    })
  }
  f && ir(f, e, 'c')
  function ue(Z, Y) {
    F(Y) ? Y.forEach((Ue) => Z(Ue.bind(n))) : Y && Z(Y.bind(n))
  }
  if (
    (ue(dl, h),
    ue(Io, p),
    ue(hl, m),
    ue(pl, S),
    ue(ul, $),
    ue(fl, H),
    ue(bl, Se),
    ue(yl, K),
    ue(_l, ye),
    ue(gl, B),
    ue($o, Q),
    ue(ml, ct),
    F(Le))
  )
    if (Le.length) {
      const Z = e.exposed || (e.exposed = {})
      Le.forEach((Y) => {
        Object.defineProperty(Z, Y, { get: () => n[Y], set: (Ue) => (n[Y] = Ue) })
      })
    } else e.exposed || (e.exposed = {})
  ie && e.render === Pe && (e.render = ie),
    Qe != null && (e.inheritAttrs = Qe),
    ut && (e.components = ut),
    Ne && (e.directives = Ne)
}
function El(e, t, n = Pe) {
  F(e) && (e = ps(e))
  for (const s in e) {
    const r = e[s]
    let o
    oe(r)
      ? 'default' in r
        ? (o = We(r.from || s, r.default, !0))
        : (o = We(r.from || s))
      : (o = We(r)),
      pe(o)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i)
          })
        : (t[s] = o)
  }
}
function ir(e, t, n) {
  $e(F(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Mo(e, t, n, s) {
  const r = s.includes('.') ? So(n, s) : () => n[s]
  if (de(e)) {
    const o = t[e]
    V(o) && hn(r, o)
  } else if (V(e)) hn(r, e.bind(n))
  else if (oe(e))
    if (F(e)) e.forEach((o) => Mo(o, t, n, s))
    else {
      const o = V(e.handler) ? e.handler.bind(n) : t[e.handler]
      V(o) && hn(r, o, e)
    }
}
function js(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i }
    } = e.appContext,
    u = o.get(t)
  let l
  return (
    u
      ? (l = u)
      : !r.length && !n && !s
        ? (l = t)
        : ((l = {}), r.length && r.forEach((d) => En(l, d, i, !0)), En(l, t, i)),
    oe(t) && o.set(t, l),
    l
  )
}
function En(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t
  o && En(e, o, n, !0), r && r.forEach((i) => En(e, i, n, !0))
  for (const i in t)
    if (!(s && i === 'expose')) {
      const u = xl[i] || (n && n[i])
      e[i] = u ? u(e[i], t[i]) : t[i]
    }
  return e
}
const xl = {
  data: lr,
  props: cr,
  emits: cr,
  methods: Vt,
  computed: Vt,
  beforeCreate: be,
  created: be,
  beforeMount: be,
  mounted: be,
  beforeUpdate: be,
  updated: be,
  beforeDestroy: be,
  beforeUnmount: be,
  destroyed: be,
  unmounted: be,
  activated: be,
  deactivated: be,
  errorCaptured: be,
  serverPrefetch: be,
  components: Vt,
  directives: Vt,
  watch: Rl,
  provide: lr,
  inject: Cl
}
function lr(e, t) {
  return t
    ? e
      ? function () {
          return ae(V(e) ? e.call(this, this) : e, V(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function Cl(e, t) {
  return Vt(ps(e), ps(t))
}
function ps(e) {
  if (F(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function be(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Vt(e, t) {
  return e ? ae(Object.create(null), e, t) : t
}
function cr(e, t) {
  return e
    ? F(e) && F(t)
      ? [...new Set([...e, ...t])]
      : ae(Object.create(null), wn(e), wn(t ?? {}))
    : t
}
function Rl(e, t) {
  if (!e) return t
  if (!t) return e
  const n = ae(Object.create(null), e)
  for (const s in t) n[s] = be(e[s], t[s])
  return n
}
function Lo() {
  return {
    app: null,
    config: {
      isNativeTag: ii,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
let Sl = 0
function Pl(e, t) {
  return function (s, r = null) {
    V(s) || (s = ae({}, s)), r != null && !oe(r) && (r = null)
    const o = Lo(),
      i = new WeakSet()
    let u = !1
    const l = (o.app = {
      _uid: Sl++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Zl,
      get config() {
        return o.config
      },
      set config(d) {},
      use(d, ...f) {
        return (
          i.has(d) ||
            (d && V(d.install) ? (i.add(d), d.install(l, ...f)) : V(d) && (i.add(d), d(l, ...f))),
          l
        )
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), l
      },
      component(d, f) {
        return f ? ((o.components[d] = f), l) : o.components[d]
      },
      directive(d, f) {
        return f ? ((o.directives[d] = f), l) : o.directives[d]
      },
      mount(d, f, h) {
        if (!u) {
          const p = I(s, r)
          return (
            (p.appContext = o),
            h === !0 ? (h = 'svg') : h === !1 && (h = void 0),
            f && t ? t(p, d) : e(p, d, h),
            (u = !0),
            (l._container = d),
            (d.__vue_app__ = l),
            Vn(p.component) || p.component.proxy
          )
        }
      },
      unmount() {
        u && (e(null, l._container), delete l._container.__vue_app__)
      },
      provide(d, f) {
        return (o.provides[d] = f), l
      },
      runWithContext(d) {
        const f = Wt
        Wt = l
        try {
          return d()
        } finally {
          Wt = f
        }
      }
    })
    return l
  }
}
let Wt = null
function pn(e, t) {
  if (he) {
    let n = he.provides
    const s = he.parent && he.parent.provides
    s === n && (n = he.provides = Object.create(s)), (n[e] = t)
  }
}
function We(e, t, n = !1) {
  const s = he || ce
  if (s || Wt) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : Wt._context.provides
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && V(t) ? t.call(s && s.proxy) : t
  }
}
function Ol(e, t, n, s = !1) {
  const r = {},
    o = {}
  _n(o, kn, 1), (e.propsDefaults = Object.create(null)), No(e, t, r, o)
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0)
  n ? (e.props = s ? r : fo(r)) : e.type.props ? (e.props = r) : (e.props = o), (e.attrs = o)
}
function Al(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i }
    } = e,
    u = G(r),
    [l] = e.propsOptions
  let d = !1
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const f = e.vnode.dynamicProps
      for (let h = 0; h < f.length; h++) {
        let p = f[h]
        if (Nn(e.emitsOptions, p)) continue
        const m = t[p]
        if (l)
          if (q(o, p)) m !== o[p] && ((o[p] = m), (d = !0))
          else {
            const S = Te(p)
            r[S] = gs(l, u, S, m, e, !1)
          }
        else m !== o[p] && ((o[p] = m), (d = !0))
      }
    }
  } else {
    No(e, t, r, o) && (d = !0)
    let f
    for (const h in u)
      (!t || (!q(t, h) && ((f = lt(h)) === h || !q(t, f)))) &&
        (l
          ? n && (n[h] !== void 0 || n[f] !== void 0) && (r[h] = gs(l, u, h, void 0, e, !0))
          : delete r[h])
    if (o !== u) for (const h in o) (!t || !q(t, h)) && (delete o[h], (d = !0))
  }
  d && ze(e, 'set', '$attrs')
}
function No(e, t, n, s) {
  const [r, o] = e.propsOptions
  let i = !1,
    u
  if (t)
    for (let l in t) {
      if (Ut(l)) continue
      const d = t[l]
      let f
      r && q(r, (f = Te(l)))
        ? !o || !o.includes(f)
          ? (n[f] = d)
          : ((u || (u = {}))[f] = d)
        : Nn(e.emitsOptions, l) || ((!(l in s) || d !== s[l]) && ((s[l] = d), (i = !0)))
    }
  if (o) {
    const l = G(n),
      d = u || ne
    for (let f = 0; f < o.length; f++) {
      const h = o[f]
      n[h] = gs(r, l, h, d[h], e, !q(d, h))
    }
  }
  return i
}
function gs(e, t, n, s, r, o) {
  const i = e[n]
  if (i != null) {
    const u = q(i, 'default')
    if (u && s === void 0) {
      const l = i.default
      if (i.type !== Function && !i.skipFactory && V(l)) {
        const { propsDefaults: d } = r
        if (n in d) s = d[n]
        else {
          const f = nn(r)
          ;(s = d[n] = l.call(null, t)), f()
        }
      } else s = l
    }
    i[0] && (o && !u ? (s = !1) : i[1] && (s === '' || s === lt(n)) && (s = !0))
  }
  return s
}
function Fo(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e)
  if (r) return r
  const o = e.props,
    i = {},
    u = []
  let l = !1
  if (!V(e)) {
    const f = (h) => {
      l = !0
      const [p, m] = Fo(h, t, !0)
      ae(i, p), m && u.push(...m)
    }
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f)
  }
  if (!o && !l) return oe(e) && s.set(e, St), St
  if (F(o))
    for (let f = 0; f < o.length; f++) {
      const h = Te(o[f])
      ur(h) && (i[h] = ne)
    }
  else if (o)
    for (const f in o) {
      const h = Te(f)
      if (ur(h)) {
        const p = o[f],
          m = (i[h] = F(p) || V(p) ? { type: p } : ae({}, p))
        if (m) {
          const S = dr(Boolean, m.type),
            $ = dr(String, m.type)
          ;(m[0] = S > -1), (m[1] = $ < 0 || S < $), (S > -1 || q(m, 'default')) && u.push(h)
        }
      }
    }
  const d = [i, u]
  return oe(e) && s.set(e, d), d
}
function ur(e) {
  return e[0] !== '$' && !Ut(e)
}
function fr(e) {
  return e === null
    ? 'null'
    : typeof e == 'function'
      ? e.name || ''
      : (typeof e == 'object' && e.constructor && e.constructor.name) || ''
}
function ar(e, t) {
  return fr(e) === fr(t)
}
function dr(e, t) {
  return F(t) ? t.findIndex((n) => ar(n, e)) : V(t) && ar(t, e) ? 0 : -1
}
const Bo = (e) => e[0] === '_' || e === '$stable',
  ks = (e) => (F(e) ? e.map(ke) : [ke(e)]),
  Il = (e, t, n) => {
    if (t._n) return t
    const s = N((...r) => ks(t(...r)), n)
    return (s._c = !1), s
  },
  jo = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (Bo(r)) continue
      const o = e[r]
      if (V(o)) t[r] = Il(r, o, s)
      else if (o != null) {
        const i = ks(o)
        t[r] = () => i
      }
    }
  },
  ko = (e, t) => {
    const n = ks(t)
    e.slots.default = () => n
  },
  $l = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = G(t)), _n(t, '_', n)) : jo(t, (e.slots = {}))
    } else (e.slots = {}), t && ko(e, t)
    _n(e.slots, kn, 1)
  },
  Tl = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let o = !0,
      i = ne
    if (s.shapeFlag & 32) {
      const u = t._
      u
        ? n && u === 1
          ? (o = !1)
          : (ae(r, t), !n && u === 1 && delete r._)
        : ((o = !t.$stable), jo(t, r)),
        (i = t)
    } else t && (ko(e, t), (i = { default: 1 }))
    if (o) for (const u in r) !Bo(u) && i[u] == null && delete r[u]
  }
function ms(e, t, n, s, r = !1) {
  if (F(e)) {
    e.forEach((p, m) => ms(p, t && (F(t) ? t[m] : t), n, s, r))
    return
  }
  if (Dt(s) && !r) return
  const o = s.shapeFlag & 4 ? Vn(s.component) || s.component.proxy : s.el,
    i = r ? null : o,
    { i: u, r: l } = e,
    d = t && t.r,
    f = u.refs === ne ? (u.refs = {}) : u.refs,
    h = u.setupState
  if (
    (d != null &&
      d !== l &&
      (de(d) ? ((f[d] = null), q(h, d) && (h[d] = null)) : pe(d) && (d.value = null)),
    V(l))
  )
    ot(l, u, 12, [i, f])
  else {
    const p = de(l),
      m = pe(l)
    if (p || m) {
      const S = () => {
        if (e.f) {
          const $ = p ? (q(h, l) ? h[l] : f[l]) : l.value
          r
            ? F($) && xs($, o)
            : F($)
              ? $.includes(o) || $.push(o)
              : p
                ? ((f[l] = [o]), q(h, l) && (h[l] = f[l]))
                : ((l.value = [o]), e.k && (f[e.k] = l.value))
        } else p ? ((f[l] = i), q(h, l) && (h[l] = i)) : m && ((l.value = i), e.k && (f[e.k] = i))
      }
      i ? ((S.id = -1), we(S, n)) : S()
    }
  }
}
const we = rl
function Ml(e) {
  return Ll(e)
}
function Ll(e, t) {
  const n = Qr()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: u,
      createComment: l,
      setText: d,
      setElementText: f,
      parentNode: h,
      nextSibling: p,
      setScopeId: m = Pe,
      insertStaticContent: S
    } = e,
    $ = (c, a, g, b = null, _ = null, E = null, R = void 0, w = null, x = !!a.dynamicChildren) => {
      if (c === a) return
      c && !Bt(c, a) && ((b = y(c)), ve(c, _, E, !0), (c = null)),
        a.patchFlag === -2 && ((x = !1), (a.dynamicChildren = null))
      const { type: v, ref: O, shapeFlag: L } = a
      switch (v) {
        case jn:
          H(c, a, g, b)
          break
        case it:
          T(c, a, g, b)
          break
        case Qn:
          c == null && B(a, g, b, R)
          break
        case Ee:
          ut(c, a, g, b, _, E, R, w, x)
          break
        default:
          L & 1
            ? ie(c, a, g, b, _, E, R, w, x)
            : L & 6
              ? Ne(c, a, g, b, _, E, R, w, x)
              : (L & 64 || L & 128) && v.process(c, a, g, b, _, E, R, w, x, A)
      }
      O != null && _ && ms(O, c && c.ref, E, a || c, !a)
    },
    H = (c, a, g, b) => {
      if (c == null) s((a.el = u(a.children)), g, b)
      else {
        const _ = (a.el = c.el)
        a.children !== c.children && d(_, a.children)
      }
    },
    T = (c, a, g, b) => {
      c == null ? s((a.el = l(a.children || '')), g, b) : (a.el = c.el)
    },
    B = (c, a, g, b) => {
      ;[c.el, c.anchor] = S(c.children, a, g, b, c.el, c.anchor)
    },
    U = ({ el: c, anchor: a }, g, b) => {
      let _
      for (; c && c !== a; ) (_ = p(c)), s(c, g, b), (c = _)
      s(a, g, b)
    },
    Q = ({ el: c, anchor: a }) => {
      let g
      for (; c && c !== a; ) (g = p(c)), r(c), (c = g)
      r(a)
    },
    ie = (c, a, g, b, _, E, R, w, x) => {
      a.type === 'svg' ? (R = 'svg') : a.type === 'math' && (R = 'mathml'),
        c == null ? K(a, g, b, _, E, R, w, x) : ct(c, a, _, E, R, w, x)
    },
    K = (c, a, g, b, _, E, R, w) => {
      let x, v
      const { props: O, shapeFlag: L, transition: M, dirs: j } = c
      if (
        ((x = c.el = i(c.type, E, O && O.is, O)),
        L & 8 ? f(x, c.children) : L & 16 && Se(c.children, x, null, b, _, Gn(c, E), R, w),
        j && ft(c, null, b, 'created'),
        ye(x, c, c.scopeId, R, b),
        O)
      ) {
        for (const ee in O)
          ee !== 'value' && !Ut(ee) && o(x, ee, null, O[ee], E, c.children, b, _, ge)
        'value' in O && o(x, 'value', null, O.value, E), (v = O.onVnodeBeforeMount) && je(v, b, c)
      }
      j && ft(c, null, b, 'beforeMount')
      const W = Nl(_, M)
      W && M.beforeEnter(x),
        s(x, a, g),
        ((v = O && O.onVnodeMounted) || W || j) &&
          we(() => {
            v && je(v, b, c), W && M.enter(x), j && ft(c, null, b, 'mounted')
          }, _)
    },
    ye = (c, a, g, b, _) => {
      if ((g && m(c, g), b)) for (let E = 0; E < b.length; E++) m(c, b[E])
      if (_) {
        let E = _.subTree
        if (a === E) {
          const R = _.vnode
          ye(c, R, R.scopeId, R.slotScopeIds, _.parent)
        }
      }
    },
    Se = (c, a, g, b, _, E, R, w, x = 0) => {
      for (let v = x; v < c.length; v++) {
        const O = (c[v] = w ? tt(c[v]) : ke(c[v]))
        $(null, O, a, g, b, _, E, R, w)
      }
    },
    ct = (c, a, g, b, _, E, R) => {
      const w = (a.el = c.el)
      let { patchFlag: x, dynamicChildren: v, dirs: O } = a
      x |= c.patchFlag & 16
      const L = c.props || ne,
        M = a.props || ne
      let j
      if (
        (g && at(g, !1),
        (j = M.onVnodeBeforeUpdate) && je(j, g, a, c),
        O && ft(a, c, g, 'beforeUpdate'),
        g && at(g, !0),
        v
          ? Le(c.dynamicChildren, v, w, g, b, Gn(a, _), E)
          : R || Y(c, a, w, null, g, b, Gn(a, _), E, !1),
        x > 0)
      ) {
        if (x & 16) Qe(w, a, L, M, g, b, _)
        else if (
          (x & 2 && L.class !== M.class && o(w, 'class', null, M.class, _),
          x & 4 && o(w, 'style', L.style, M.style, _),
          x & 8)
        ) {
          const W = a.dynamicProps
          for (let ee = 0; ee < W.length; ee++) {
            const re = W[ee],
              fe = L[re],
              Oe = M[re]
            ;(Oe !== fe || re === 'value') && o(w, re, fe, Oe, _, c.children, g, b, ge)
          }
        }
        x & 1 && c.children !== a.children && f(w, a.children)
      } else !R && v == null && Qe(w, a, L, M, g, b, _)
      ;((j = M.onVnodeUpdated) || O) &&
        we(() => {
          j && je(j, g, a, c), O && ft(a, c, g, 'updated')
        }, b)
    },
    Le = (c, a, g, b, _, E, R) => {
      for (let w = 0; w < a.length; w++) {
        const x = c[w],
          v = a[w],
          O = x.el && (x.type === Ee || !Bt(x, v) || x.shapeFlag & 70) ? h(x.el) : g
        $(x, v, O, null, b, _, E, R, !0)
      }
    },
    Qe = (c, a, g, b, _, E, R) => {
      if (g !== b) {
        if (g !== ne)
          for (const w in g) !Ut(w) && !(w in b) && o(c, w, g[w], null, R, a.children, _, E, ge)
        for (const w in b) {
          if (Ut(w)) continue
          const x = b[w],
            v = g[w]
          x !== v && w !== 'value' && o(c, w, v, x, R, a.children, _, E, ge)
        }
        'value' in b && o(c, 'value', g.value, b.value, R)
      }
    },
    ut = (c, a, g, b, _, E, R, w, x) => {
      const v = (a.el = c ? c.el : u('')),
        O = (a.anchor = c ? c.anchor : u(''))
      let { patchFlag: L, dynamicChildren: M, slotScopeIds: j } = a
      j && (w = w ? w.concat(j) : j),
        c == null
          ? (s(v, g, b), s(O, g, b), Se(a.children || [], g, O, _, E, R, w, x))
          : L > 0 && L & 64 && M && c.dynamicChildren
            ? (Le(c.dynamicChildren, M, g, _, E, R, w),
              (a.key != null || (_ && a === _.subTree)) && Ho(c, a, !0))
            : Y(c, a, g, O, _, E, R, w, x)
    },
    Ne = (c, a, g, b, _, E, R, w, x) => {
      ;(a.slotScopeIds = w),
        c == null
          ? a.shapeFlag & 512
            ? _.ctx.activate(a, g, b, R, x)
            : Nt(a, g, b, _, E, R, x)
          : vt(c, a, x)
    },
    Nt = (c, a, g, b, _, E, R) => {
      const w = (c.component = Dl(c, b, _))
      if ((Oo(c) && (w.ctx.renderer = A), Wl(w), w.asyncDep)) {
        if ((_ && _.registerDep(w, ue), !c.el)) {
          const x = (w.subTree = I(it))
          T(null, x, a, g)
        }
      } else ue(w, c, a, g, _, E, R)
    },
    vt = (c, a, g) => {
      const b = (a.component = c.component)
      if (Zi(c, a, g))
        if (b.asyncDep && !b.asyncResolved) {
          Z(b, a, g)
          return
        } else (b.next = a), qi(b.update), (b.effect.dirty = !0), b.update()
      else (a.el = c.el), (b.vnode = a)
    },
    ue = (c, a, g, b, _, E, R) => {
      const w = () => {
          if (c.isMounted) {
            let { next: O, bu: L, u: M, parent: j, vnode: W } = c
            {
              const xt = Vo(c)
              if (xt) {
                O && ((O.el = W.el), Z(c, O, R)),
                  xt.asyncDep.then(() => {
                    c.isUnmounted || w()
                  })
                return
              }
            }
            let ee = O,
              re
            at(c, !1),
              O ? ((O.el = W.el), Z(c, O, R)) : (O = W),
              L && an(L),
              (re = O.props && O.props.onVnodeBeforeUpdate) && je(re, j, O, W),
              at(c, !0)
            const fe = Wn(c),
              Oe = c.subTree
            ;(c.subTree = fe),
              $(Oe, fe, h(Oe.el), y(Oe), c, _, E),
              (O.el = fe.el),
              ee === null && el(c, fe.el),
              M && we(M, _),
              (re = O.props && O.props.onVnodeUpdated) && we(() => je(re, j, O, W), _)
          } else {
            let O
            const { el: L, props: M } = a,
              { bm: j, m: W, parent: ee } = c,
              re = Dt(a)
            if (
              (at(c, !1),
              j && an(j),
              !re && (O = M && M.onVnodeBeforeMount) && je(O, ee, a),
              at(c, !0),
              L && se)
            ) {
              const fe = () => {
                ;(c.subTree = Wn(c)), se(L, c.subTree, c, _, null)
              }
              re ? a.type.__asyncLoader().then(() => !c.isUnmounted && fe()) : fe()
            } else {
              const fe = (c.subTree = Wn(c))
              $(null, fe, g, b, c, _, E), (a.el = fe.el)
            }
            if ((W && we(W, _), !re && (O = M && M.onVnodeMounted))) {
              const fe = a
              we(() => je(O, ee, fe), _)
            }
            ;(a.shapeFlag & 256 || (ee && Dt(ee.vnode) && ee.vnode.shapeFlag & 256)) &&
              c.a &&
              we(c.a, _),
              (c.isMounted = !0),
              (a = g = b = null)
          }
        },
        x = (c.effect = new Ss(w, Pe, () => Fs(v), c.scope)),
        v = (c.update = () => {
          x.dirty && x.run()
        })
      ;(v.id = c.uid), at(c, !0), v()
    },
    Z = (c, a, g) => {
      a.component = c
      const b = c.vnode.props
      ;(c.vnode = a), (c.next = null), Al(c, a.props, b, g), Tl(c, a.children, g), _t(), nr(c), yt()
    },
    Y = (c, a, g, b, _, E, R, w, x = !1) => {
      const v = c && c.children,
        O = c ? c.shapeFlag : 0,
        L = a.children,
        { patchFlag: M, shapeFlag: j } = a
      if (M > 0) {
        if (M & 128) {
          Ye(v, L, g, b, _, E, R, w, x)
          return
        } else if (M & 256) {
          Ue(v, L, g, b, _, E, R, w, x)
          return
        }
      }
      j & 8
        ? (O & 16 && ge(v, _, E), L !== v && f(g, L))
        : O & 16
          ? j & 16
            ? Ye(v, L, g, b, _, E, R, w, x)
            : ge(v, _, E, !0)
          : (O & 8 && f(g, ''), j & 16 && Se(L, g, b, _, E, R, w, x))
    },
    Ue = (c, a, g, b, _, E, R, w, x) => {
      ;(c = c || St), (a = a || St)
      const v = c.length,
        O = a.length,
        L = Math.min(v, O)
      let M
      for (M = 0; M < L; M++) {
        const j = (a[M] = x ? tt(a[M]) : ke(a[M]))
        $(c[M], j, g, null, _, E, R, w, x)
      }
      v > O ? ge(c, _, E, !0, !1, L) : Se(a, g, b, _, E, R, w, x, L)
    },
    Ye = (c, a, g, b, _, E, R, w, x) => {
      let v = 0
      const O = a.length
      let L = c.length - 1,
        M = O - 1
      for (; v <= L && v <= M; ) {
        const j = c[v],
          W = (a[v] = x ? tt(a[v]) : ke(a[v]))
        if (Bt(j, W)) $(j, W, g, null, _, E, R, w, x)
        else break
        v++
      }
      for (; v <= L && v <= M; ) {
        const j = c[L],
          W = (a[M] = x ? tt(a[M]) : ke(a[M]))
        if (Bt(j, W)) $(j, W, g, null, _, E, R, w, x)
        else break
        L--, M--
      }
      if (v > L) {
        if (v <= M) {
          const j = M + 1,
            W = j < O ? a[j].el : b
          for (; v <= M; ) $(null, (a[v] = x ? tt(a[v]) : ke(a[v])), g, W, _, E, R, w, x), v++
        }
      } else if (v > M) for (; v <= L; ) ve(c[v], _, E, !0), v++
      else {
        const j = v,
          W = v,
          ee = new Map()
        for (v = W; v <= M; v++) {
          const Re = (a[v] = x ? tt(a[v]) : ke(a[v]))
          Re.key != null && ee.set(Re.key, v)
        }
        let re,
          fe = 0
        const Oe = M - W + 1
        let xt = !1,
          zs = 0
        const Ft = new Array(Oe)
        for (v = 0; v < Oe; v++) Ft[v] = 0
        for (v = j; v <= L; v++) {
          const Re = c[v]
          if (fe >= Oe) {
            ve(Re, _, E, !0)
            continue
          }
          let Be
          if (Re.key != null) Be = ee.get(Re.key)
          else
            for (re = W; re <= M; re++)
              if (Ft[re - W] === 0 && Bt(Re, a[re])) {
                Be = re
                break
              }
          Be === void 0
            ? ve(Re, _, E, !0)
            : ((Ft[Be - W] = v + 1),
              Be >= zs ? (zs = Be) : (xt = !0),
              $(Re, a[Be], g, null, _, E, R, w, x),
              fe++)
        }
        const Ws = xt ? Fl(Ft) : St
        for (re = Ws.length - 1, v = Oe - 1; v >= 0; v--) {
          const Re = W + v,
            Be = a[Re],
            qs = Re + 1 < O ? a[Re + 1].el : b
          Ft[v] === 0
            ? $(null, Be, g, qs, _, E, R, w, x)
            : xt && (re < 0 || v !== Ws[re] ? Fe(Be, g, qs, 2) : re--)
        }
      }
    },
    Fe = (c, a, g, b, _ = null) => {
      const { el: E, type: R, transition: w, children: x, shapeFlag: v } = c
      if (v & 6) {
        Fe(c.component.subTree, a, g, b)
        return
      }
      if (v & 128) {
        c.suspense.move(a, g, b)
        return
      }
      if (v & 64) {
        R.move(c, a, g, A)
        return
      }
      if (R === Ee) {
        s(E, a, g)
        for (let L = 0; L < x.length; L++) Fe(x[L], a, g, b)
        s(c.anchor, a, g)
        return
      }
      if (R === Qn) {
        U(c, a, g)
        return
      }
      if (b !== 2 && v & 1 && w)
        if (b === 0) w.beforeEnter(E), s(E, a, g), we(() => w.enter(E), _)
        else {
          const { leave: L, delayLeave: M, afterLeave: j } = w,
            W = () => s(E, a, g),
            ee = () => {
              L(E, () => {
                W(), j && j()
              })
            }
          M ? M(E, W, ee) : ee()
        }
      else s(E, a, g)
    },
    ve = (c, a, g, b = !1, _ = !1) => {
      const {
        type: E,
        props: R,
        ref: w,
        children: x,
        dynamicChildren: v,
        shapeFlag: O,
        patchFlag: L,
        dirs: M
      } = c
      if ((w != null && ms(w, null, g, c, !0), O & 256)) {
        a.ctx.deactivate(c)
        return
      }
      const j = O & 1 && M,
        W = !Dt(c)
      let ee
      if ((W && (ee = R && R.onVnodeBeforeUnmount) && je(ee, a, c), O & 6)) sn(c.component, g, b)
      else {
        if (O & 128) {
          c.suspense.unmount(g, b)
          return
        }
        j && ft(c, null, a, 'beforeUnmount'),
          O & 64
            ? c.type.remove(c, a, g, _, A, b)
            : v && (E !== Ee || (L > 0 && L & 64))
              ? ge(v, a, g, !1, !0)
              : ((E === Ee && L & 384) || (!_ && O & 16)) && ge(x, a, g),
          b && wt(c)
      }
      ;((W && (ee = R && R.onVnodeUnmounted)) || j) &&
        we(() => {
          ee && je(ee, a, c), j && ft(c, null, a, 'unmounted')
        }, g)
    },
    wt = (c) => {
      const { type: a, el: g, anchor: b, transition: _ } = c
      if (a === Ee) {
        Et(g, b)
        return
      }
      if (a === Qn) {
        Q(c)
        return
      }
      const E = () => {
        r(g), _ && !_.persisted && _.afterLeave && _.afterLeave()
      }
      if (c.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: R, delayLeave: w } = _,
          x = () => R(g, E)
        w ? w(c.el, E, x) : x()
      } else E()
    },
    Et = (c, a) => {
      let g
      for (; c !== a; ) (g = p(c)), r(c), (c = g)
      r(a)
    },
    sn = (c, a, g) => {
      const { bum: b, scope: _, update: E, subTree: R, um: w } = c
      b && an(b),
        _.stop(),
        E && ((E.active = !1), ve(R, c, a, g)),
        w && we(w, a),
        we(() => {
          c.isUnmounted = !0
        }, a),
        a &&
          a.pendingBranch &&
          !a.isUnmounted &&
          c.asyncDep &&
          !c.asyncResolved &&
          c.suspenseId === a.pendingId &&
          (a.deps--, a.deps === 0 && a.resolve())
    },
    ge = (c, a, g, b = !1, _ = !1, E = 0) => {
      for (let R = E; R < c.length; R++) ve(c[R], a, g, b, _)
    },
    y = (c) =>
      c.shapeFlag & 6
        ? y(c.component.subTree)
        : c.shapeFlag & 128
          ? c.suspense.next()
          : p(c.anchor || c.el)
  let P = !1
  const C = (c, a, g) => {
      c == null
        ? a._vnode && ve(a._vnode, null, null, !0)
        : $(a._vnode || null, c, a, null, null, null, g),
        P || ((P = !0), nr(), vo(), (P = !1)),
        (a._vnode = c)
    },
    A = { p: $, um: ve, m: Fe, r: wt, mt: Nt, mc: Se, pc: Y, pbc: Le, n: y, o: e }
  let J, se
  return t && ([J, se] = t(A)), { render: C, hydrate: J, createApp: Pl(C, J) }
}
function Gn({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n
}
function at({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function Nl(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Ho(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (F(s) && F(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o]
      let u = r[o]
      u.shapeFlag & 1 &&
        !u.dynamicChildren &&
        ((u.patchFlag <= 0 || u.patchFlag === 32) && ((u = r[o] = tt(r[o])), (u.el = i.el)),
        n || Ho(i, u)),
        u.type === jn && (u.el = i.el)
    }
}
function Fl(e) {
  const t = e.slice(),
    n = [0]
  let s, r, o, i, u
  const l = e.length
  for (s = 0; s < l; s++) {
    const d = e[s]
    if (d !== 0) {
      if (((r = n[n.length - 1]), e[r] < d)) {
        ;(t[s] = r), n.push(s)
        continue
      }
      for (o = 0, i = n.length - 1; o < i; ) (u = (o + i) >> 1), e[n[u]] < d ? (o = u + 1) : (i = u)
      d < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s))
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i])
  return n
}
function Vo(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Vo(t)
}
const Bl = (e) => e.__isTeleport,
  Ee = Symbol.for('v-fgt'),
  jn = Symbol.for('v-txt'),
  it = Symbol.for('v-cmt'),
  Qn = Symbol.for('v-stc'),
  qt = []
let Ie = null
function le(e = !1) {
  qt.push((Ie = e ? null : []))
}
function jl() {
  qt.pop(), (Ie = qt[qt.length - 1] || null)
}
let Zt = 1
function hr(e) {
  Zt += e
}
function Uo(e) {
  return (e.dynamicChildren = Zt > 0 ? Ie || St : null), jl(), Zt > 0 && Ie && Ie.push(e), e
}
function me(e, t, n, s, r, o) {
  return Uo(z(e, t, n, s, r, o, !0))
}
function Hs(e, t, n, s, r) {
  return Uo(I(e, t, n, s, r, !0))
}
function xn(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Bt(e, t) {
  return e.type === t.type && e.key === t.key
}
const kn = '__vInternal',
  Ko = ({ key: e }) => e ?? null,
  gn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (de(e) || pe(e) || V(e) ? { i: ce, r: e, k: t, f: !!n } : e) : null
  )
function z(e, t = null, n = null, s = 0, r = null, o = e === Ee ? 0 : 1, i = !1, u = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ko(t),
    ref: t && gn(t),
    scopeId: Fn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ce
  }
  return (
    u ? (Vs(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= de(n) ? 8 : 16),
    Zt > 0 && !i && Ie && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && Ie.push(l),
    l
  )
}
const I = kl
function kl(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === tl) && (e = it), xn(e))) {
    const u = $t(e, t, !0)
    return (
      n && Vs(u, n),
      Zt > 0 && !o && Ie && (u.shapeFlag & 6 ? (Ie[Ie.indexOf(e)] = u) : Ie.push(u)),
      (u.patchFlag |= -2),
      u
    )
  }
  if ((Jl(e) && (e = e.__vccOpts), t)) {
    t = Hl(t)
    let { class: u, style: l } = t
    u && !de(u) && (t.class = mt(u)),
      oe(l) && (ho(l) && !F(l) && (l = ae({}, l)), (t.style = Rs(l)))
  }
  const i = de(e) ? 1 : sl(e) ? 128 : Bl(e) ? 64 : oe(e) ? 4 : V(e) ? 2 : 0
  return z(e, t, n, s, r, i, o, !0)
}
function Hl(e) {
  return e ? (ho(e) || kn in e ? ae({}, e) : e) : null
}
function $t(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e,
    u = t ? Vl(s || {}, t) : s
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Ko(u),
    ref: t && t.ref ? (n && r ? (F(r) ? r.concat(gn(t)) : [r, gn(t)]) : gn(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Ee ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && $t(e.ssContent),
    ssFallback: e.ssFallback && $t(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  }
}
function D(e = ' ', t = 0) {
  return I(jn, null, e, t)
}
function et(e = '', t = !1) {
  return t ? (le(), Hs(it, null, e)) : I(it, null, e)
}
function ke(e) {
  return e == null || typeof e == 'boolean'
    ? I(it)
    : F(e)
      ? I(Ee, null, e.slice())
      : typeof e == 'object'
        ? tt(e)
        : I(jn, null, String(e))
}
function tt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : $t(e)
}
function Vs(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (F(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), Vs(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !(kn in t)
        ? (t._ctx = ce)
        : r === 3 && ce && (ce.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    V(t)
      ? ((t = { default: t, _ctx: ce }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [D(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Vl(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class') t.class !== s.class && (t.class = mt([t.class, s.class]))
      else if (r === 'style') t.style = Rs([t.style, s.style])
      else if (Pn(r)) {
        const o = t[r],
          i = s[r]
        i && o !== i && !(F(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function je(e, t, n, s = null) {
  $e(e, t, 7, [n, s])
}
const Ul = Lo()
let Kl = 0
function Dl(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Ul,
    o = {
      uid: Kl++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Xr(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Fo(s, r),
      emitsOptions: Eo(s, r),
      emit: null,
      emitted: null,
      propsDefaults: ne,
      inheritAttrs: s.inheritAttrs,
      ctx: ne,
      data: ne,
      props: ne,
      attrs: ne,
      slots: ne,
      refs: ne,
      setupState: ne,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    }
  return (
    (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = Yi.bind(null, o)), e.ce && e.ce(o), o
  )
}
let he = null
const zl = () => he || ce
let Cn, _s
{
  const e = Qr(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (o) => {
          r.length > 1 ? r.forEach((i) => i(o)) : r[0](o)
        }
      )
    }
  ;(Cn = t('__VUE_INSTANCE_SETTERS__', (n) => (he = n))),
    (_s = t('__VUE_SSR_SETTERS__', (n) => (Hn = n)))
}
const nn = (e) => {
    const t = he
    return (
      Cn(e),
      e.scope.on(),
      () => {
        e.scope.off(), Cn(t)
      }
    )
  },
  pr = () => {
    he && he.scope.off(), Cn(null)
  }
function Do(e) {
  return e.vnode.shapeFlag & 4
}
let Hn = !1
function Wl(e, t = !1) {
  t && _s(t)
  const { props: n, children: s } = e.vnode,
    r = Do(e)
  Ol(e, n, r, t), $l(e, s)
  const o = r ? ql(e, t) : void 0
  return t && _s(!1), o
}
function ql(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = Ts(new Proxy(e.ctx, vl)))
  const { setup: s } = n
  if (s) {
    const r = (e.setupContext = s.length > 1 ? Ql(e) : null),
      o = nn(e)
    _t()
    const i = ot(s, e, 0, [e.props, r])
    if ((yt(), o(), Wr(i))) {
      if ((i.then(pr, pr), t))
        return i
          .then((u) => {
            gr(e, u, t)
          })
          .catch((u) => {
            Ln(u, e, 0)
          })
      e.asyncDep = i
    } else gr(e, i, t)
  } else zo(e, t)
}
function gr(e, t, n) {
  V(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : oe(t) && (e.setupState = mo(t)),
    zo(e, n)
}
let mr
function zo(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && mr && !s.render) {
      const r = s.template || js(e).template
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: u, compilerOptions: l } = s,
          d = ae(ae({ isCustomElement: o, delimiters: u }, i), l)
        s.render = mr(r, d)
      }
    }
    e.render = s.render || Pe
  }
  {
    const r = nn(e)
    _t()
    try {
      wl(e)
    } finally {
      yt(), r()
    }
  }
}
function Gl(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return Ce(e, 'get', '$attrs'), t[n]
      }
    }))
  )
}
function Ql(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    get attrs() {
      return Gl(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}
function Vn(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(mo(Ts(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in zt) return zt[n](e)
        },
        has(t, n) {
          return n in t || n in zt
        }
      }))
    )
}
function Yl(e, t = !0) {
  return V(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Jl(e) {
  return V(e) && '__vccOpts' in e
}
const xe = (e, t) => ki(e, t, Hn)
function Xl(e, t, n = ne) {
  const s = zl(),
    r = Te(t),
    o = lt(t),
    i = Di((l, d) => {
      let f
      return (
        ll(() => {
          const h = e[t]
          Ve(f, h) && ((f = h), d())
        }),
        {
          get() {
            return l(), n.get ? n.get(f) : f
          },
          set(h) {
            const p = s.vnode.props
            !(
              p &&
              (t in p || r in p || o in p) &&
              (`onUpdate:${t}` in p || `onUpdate:${r}` in p || `onUpdate:${o}` in p)
            ) &&
              Ve(h, f) &&
              ((f = h), d()),
              s.emit(`update:${t}`, n.set ? n.set(h) : h)
          }
        }
      )
    }),
    u = t === 'modelValue' ? 'modelModifiers' : `${t}Modifiers`
  return (
    (i[Symbol.iterator] = () => {
      let l = 0
      return {
        next() {
          return l < 2 ? { value: l++ ? e[u] || {} : i, done: !1 } : { done: !0 }
        }
      }
    }),
    i
  )
}
function Wo(e, t, n) {
  const s = arguments.length
  return s === 2
    ? oe(t) && !F(t)
      ? xn(t)
        ? I(e, null, [t])
        : I(e, t)
      : I(e, null, t)
    : (s > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : s === 3 && xn(n) && (n = [n]),
      I(e, t, n))
}
const Zl = '3.4.21'
/**
 * @vue/runtime-dom v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const ec = 'http://www.w3.org/2000/svg',
  tc = 'http://www.w3.org/1998/Math/MathML',
  nt = typeof document < 'u' ? document : null,
  _r = nt && nt.createElement('template'),
  nc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? nt.createElementNS(ec, e)
          : t === 'mathml'
            ? nt.createElementNS(tc, e)
            : nt.createElement(e, n ? { is: n } : void 0)
      return e === 'select' && s && s.multiple != null && r.setAttribute('multiple', s.multiple), r
    },
    createText: (e) => nt.createTextNode(e),
    createComment: (e) => nt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => nt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild
      if (r && (r === o || r.nextSibling))
        for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); );
      else {
        _r.innerHTML = s === 'svg' ? `<svg>${e}</svg>` : s === 'mathml' ? `<math>${e}</math>` : e
        const u = _r.content
        if (s === 'svg' || s === 'mathml') {
          const l = u.firstChild
          for (; l.firstChild; ) u.appendChild(l.firstChild)
          u.removeChild(l)
        }
        t.insertBefore(u, n)
      }
      return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
  },
  sc = Symbol('_vtc')
function rc(e, t, n) {
  const s = e[sc]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t)
}
const Rn = Symbol('_vod'),
  qo = Symbol('_vsh'),
  oc = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e[Rn] = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : jt(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), jt(e, !0), s.enter(e))
            : s.leave(e, () => {
                jt(e, !1)
              })
          : jt(e, t))
    },
    beforeUnmount(e, { value: t }) {
      jt(e, t)
    }
  }
function jt(e, t) {
  ;(e.style.display = t ? e[Rn] : 'none'), (e[qo] = !t)
}
const ic = Symbol(''),
  lc = /(^|;)\s*display\s*:/
function cc(e, t, n) {
  const s = e.style,
    r = de(n)
  let o = !1
  if (n && !r) {
    if (t)
      if (de(t))
        for (const i of t.split(';')) {
          const u = i.slice(0, i.indexOf(':')).trim()
          n[u] == null && mn(s, u, '')
        }
      else for (const i in t) n[i] == null && mn(s, i, '')
    for (const i in n) i === 'display' && (o = !0), mn(s, i, n[i])
  } else if (r) {
    if (t !== n) {
      const i = s[ic]
      i && (n += ';' + i), (s.cssText = n), (o = lc.test(n))
    }
  } else t && e.removeAttribute('style')
  Rn in e && ((e[Rn] = o ? s.display : ''), e[qo] && (s.display = 'none'))
}
const yr = /\s*!important$/
function mn(e, t, n) {
  if (F(n)) n.forEach((s) => mn(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = uc(e, t)
    yr.test(n) ? e.setProperty(lt(s), n.replace(yr, ''), 'important') : (e[s] = n)
  }
}
const br = ['Webkit', 'Moz', 'ms'],
  Yn = {}
function uc(e, t) {
  const n = Yn[t]
  if (n) return n
  let s = Te(t)
  if (s !== 'filter' && s in e) return (Yn[t] = s)
  s = In(s)
  for (let r = 0; r < br.length; r++) {
    const o = br[r] + s
    if (o in e) return (Yn[t] = o)
  }
  return t
}
const vr = 'http://www.w3.org/1999/xlink'
function fc(e, t, n, s, r) {
  if (s && t.startsWith('xlink:'))
    n == null ? e.removeAttributeNS(vr, t.slice(6, t.length)) : e.setAttributeNS(vr, t, n)
  else {
    const o = mi(t)
    n == null || (o && !Yr(n)) ? e.removeAttribute(t) : e.setAttribute(t, o ? '' : n)
  }
}
function ac(e, t, n, s, r, o, i) {
  if (t === 'innerHTML' || t === 'textContent') {
    s && i(s, r, o), (e[t] = n ?? '')
    return
  }
  const u = e.tagName
  if (t === 'value' && u !== 'PROGRESS' && !u.includes('-')) {
    const d = u === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      f = n ?? ''
    ;(d !== f || !('_value' in e)) && (e.value = f),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let l = !1
  if (n === '' || n == null) {
    const d = typeof e[t]
    d === 'boolean'
      ? (n = Yr(n))
      : n == null && d === 'string'
        ? ((n = ''), (l = !0))
        : d === 'number' && ((n = 0), (l = !0))
  }
  try {
    e[t] = n
  } catch {}
  l && e.removeAttribute(t)
}
function Ct(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function dc(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const wr = Symbol('_vei')
function hc(e, t, n, s, r = null) {
  const o = e[wr] || (e[wr] = {}),
    i = o[t]
  if (s && i) i.value = s
  else {
    const [u, l] = pc(t)
    if (s) {
      const d = (o[t] = _c(s, r))
      Ct(e, u, d, l)
    } else i && (dc(e, u, i, l), (o[t] = void 0))
  }
}
const Er = /(?:Once|Passive|Capture)$/
function pc(e) {
  let t
  if (Er.test(e)) {
    t = {}
    let s
    for (; (s = e.match(Er)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : lt(e.slice(2)), t]
}
let Jn = 0
const gc = Promise.resolve(),
  mc = () => Jn || (gc.then(() => (Jn = 0)), (Jn = Date.now()))
function _c(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    $e(yc(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = mc()), n
}
function yc(e, t) {
  if (F(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const xr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  bc = (e, t, n, s, r, o, i, u, l) => {
    const d = r === 'svg'
    t === 'class'
      ? rc(e, s, d)
      : t === 'style'
        ? cc(e, n, s)
        : Pn(t)
          ? Es(t) || hc(e, t, n, s, i)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : vc(e, t, s, d)
              )
            ? ac(e, t, s, o, i, u, l)
            : (t === 'true-value' ? (e._trueValue = s) : t === 'false-value' && (e._falseValue = s),
              fc(e, t, s, d))
  }
function vc(e, t, n, s) {
  if (s) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && xr(t) && V(n)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE') return !1
  }
  return xr(t) && de(n) ? !1 : t in e
}
const Cr = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1
  return F(t) ? (n) => an(t, n) : t
}
function wc(e) {
  e.target.composing = !0
}
function Rr(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')))
}
const Xn = Symbol('_assign'),
  Ec = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
      e[Xn] = Cr(r)
      const o = s || (r.props && r.props.type === 'number')
      Ct(e, t ? 'change' : 'input', (i) => {
        if (i.target.composing) return
        let u = e.value
        n && (u = u.trim()), o && (u = is(u)), e[Xn](u)
      }),
        n &&
          Ct(e, 'change', () => {
            e.value = e.value.trim()
          }),
        t || (Ct(e, 'compositionstart', wc), Ct(e, 'compositionend', Rr), Ct(e, 'change', Rr))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ''
    },
    beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: r } }, o) {
      if (((e[Xn] = Cr(o)), e.composing)) return
      const i = r || e.type === 'number' ? is(e.value) : e.value,
        u = t ?? ''
      i !== u &&
        ((document.activeElement === e &&
          e.type !== 'range' &&
          (n || (s && e.value.trim() === u))) ||
          (e.value = u))
    }
  },
  xc = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
  },
  Cc = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r) => {
        if (!('key' in r)) return
        const o = lt(r.key)
        if (t.some((i) => i === o || xc[i] === o)) return e(r)
      })
    )
  },
  Rc = ae({ patchProp: bc }, nc)
let Sr
function Sc() {
  return Sr || (Sr = Ml(Rc))
}
const Pc = (...e) => {
  const t = Sc().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = Ac(s)
      if (!r) return
      const o = t._component
      !V(o) && !o.render && !o.template && (o.template = r.innerHTML), (r.innerHTML = '')
      const i = n(r, !1, Oc(r))
      return (
        r instanceof Element && (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')), i
      )
    }),
    t
  )
}
function Oc(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function Ac(e) {
  return de(e) ? document.querySelector(e) : e
}
var Ic = !1
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const $c = Symbol()
var Pr
;(function (e) {
  ;(e.direct = 'direct'), (e.patchObject = 'patch object'), (e.patchFunction = 'patch function')
})(Pr || (Pr = {}))
function Tc() {
  const e = _i(!0),
    t = e.run(() => Mn({}))
  let n = [],
    s = []
  const r = Ts({
    install(o) {
      ;(r._a = o),
        o.provide($c, r),
        (o.config.globalProperties.$pinia = r),
        s.forEach((i) => n.push(i)),
        (s = [])
    },
    use(o) {
      return !this._a && !Ic ? s.push(o) : n.push(o), this
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t
  })
  return r
}
const Mc = z('br', null, null, -1),
  Lc = z('br', null, null, -1),
  Nc = bt({
    __name: 'App',
    setup(e) {
      return (t, n) => {
        const s = dn('router-link'),
          r = dn('AerButton'),
          o = dn('router-view')
        return (
          le(),
          me(
            Ee,
            null,
            [
              z('div', null, [
                z('button', null, [
                  I(s, { to: '/Button' }, { default: N(() => [D('Button')]), _: 1 })
                ]),
                z('button', null, [
                  I(s, { to: '/Input' }, { default: N(() => [D('Input')]), _: 1 })
                ]),
                z('button', null, [
                  I(s, { to: 'Dialog' }, { default: N(() => [D('Dialog')]), _: 1 })
                ]),
                I(r, null, { default: N(() => [D('我')]), _: 1 })
              ]),
              Mc,
              Lc,
              I(o)
            ],
            64
          )
        )
      }
    }
  })
/*!
 * vue-router v4.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Rt = typeof document < 'u'
function Fc(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const X = Object.assign
function Zn(e, t) {
  const n = {}
  for (const s in t) {
    const r = t[s]
    n[s] = Me(r) ? r.map(e) : e(r)
  }
  return n
}
const Gt = () => {},
  Me = Array.isArray,
  Go = /#/g,
  Bc = /&/g,
  jc = /\//g,
  kc = /=/g,
  Hc = /\?/g,
  Qo = /\+/g,
  Vc = /%5B/g,
  Uc = /%5D/g,
  Yo = /%5E/g,
  Kc = /%60/g,
  Jo = /%7B/g,
  Dc = /%7C/g,
  Xo = /%7D/g,
  zc = /%20/g
function Us(e) {
  return encodeURI('' + e)
    .replace(Dc, '|')
    .replace(Vc, '[')
    .replace(Uc, ']')
}
function Wc(e) {
  return Us(e).replace(Jo, '{').replace(Xo, '}').replace(Yo, '^')
}
function ys(e) {
  return Us(e)
    .replace(Qo, '%2B')
    .replace(zc, '+')
    .replace(Go, '%23')
    .replace(Bc, '%26')
    .replace(Kc, '`')
    .replace(Jo, '{')
    .replace(Xo, '}')
    .replace(Yo, '^')
}
function qc(e) {
  return ys(e).replace(kc, '%3D')
}
function Gc(e) {
  return Us(e).replace(Go, '%23').replace(Hc, '%3F')
}
function Qc(e) {
  return e == null ? '' : Gc(e).replace(jc, '%2F')
}
function en(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const Yc = /\/$/,
  Jc = (e) => e.replace(Yc, '')
function es(e, t, n = '/') {
  let s,
    r = {},
    o = '',
    i = ''
  const u = t.indexOf('#')
  let l = t.indexOf('?')
  return (
    u < l && u >= 0 && (l = -1),
    l > -1 && ((s = t.slice(0, l)), (o = t.slice(l + 1, u > -1 ? u : t.length)), (r = e(o))),
    u > -1 && ((s = s || t.slice(0, u)), (i = t.slice(u, t.length))),
    (s = tu(s ?? t, n)),
    { fullPath: s + (o && '?') + o + i, path: s, query: r, hash: en(i) }
  )
}
function Xc(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function Or(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function Zc(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1
  return (
    s > -1 &&
    s === r &&
    Tt(t.matched[s], n.matched[r]) &&
    Zo(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Tt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Zo(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!eu(e[n], t[n])) return !1
  return !0
}
function eu(e, t) {
  return Me(e) ? Ar(e, t) : Me(t) ? Ar(t, e) : e === t
}
function Ar(e, t) {
  return Me(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function tu(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    s = e.split('/'),
    r = s[s.length - 1]
  ;(r === '..' || r === '.') && s.push('')
  let o = n.length - 1,
    i,
    u
  for (i = 0; i < s.length; i++)
    if (((u = s[i]), u !== '.'))
      if (u === '..') o > 1 && o--
      else break
  return n.slice(0, o).join('/') + '/' + s.slice(i).join('/')
}
var tn
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(tn || (tn = {}))
var Qt
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(Qt || (Qt = {}))
function nu(e) {
  if (!e)
    if (Rt) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Jc(e)
}
const su = /^[^#]+#/
function ru(e, t) {
  return e.replace(su, '#') + t
}
function ou(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  }
}
const Un = () => ({ left: window.scrollX, top: window.scrollY })
function iu(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      r =
        typeof n == 'string'
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!r) return
    t = ou(r, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      )
}
function Ir(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const bs = new Map()
function lu(e, t) {
  bs.set(e, t)
}
function cu(e) {
  const t = bs.get(e)
  return bs.delete(e), t
}
let uu = () => location.protocol + '//' + location.host
function ei(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    o = e.indexOf('#')
  if (o > -1) {
    let u = r.includes(e.slice(o)) ? e.slice(o).length : 1,
      l = r.slice(u)
    return l[0] !== '/' && (l = '/' + l), Or(l, '')
  }
  return Or(n, e) + s + r
}
function fu(e, t, n, s) {
  let r = [],
    o = [],
    i = null
  const u = ({ state: p }) => {
    const m = ei(e, location),
      S = n.value,
      $ = t.value
    let H = 0
    if (p) {
      if (((n.value = m), (t.value = p), i && i === S)) {
        i = null
        return
      }
      H = $ ? p.position - $.position : 0
    } else s(m)
    r.forEach((T) => {
      T(n.value, S, {
        delta: H,
        type: tn.pop,
        direction: H ? (H > 0 ? Qt.forward : Qt.back) : Qt.unknown
      })
    })
  }
  function l() {
    i = n.value
  }
  function d(p) {
    r.push(p)
    const m = () => {
      const S = r.indexOf(p)
      S > -1 && r.splice(S, 1)
    }
    return o.push(m), m
  }
  function f() {
    const { history: p } = window
    p.state && p.replaceState(X({}, p.state, { scroll: Un() }), '')
  }
  function h() {
    for (const p of o) p()
    ;(o = []),
      window.removeEventListener('popstate', u),
      window.removeEventListener('beforeunload', f)
  }
  return (
    window.addEventListener('popstate', u),
    window.addEventListener('beforeunload', f, { passive: !0 }),
    { pauseListeners: l, listen: d, destroy: h }
  )
}
function $r(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? Un() : null
  }
}
function au(e) {
  const { history: t, location: n } = window,
    s = { value: ei(e, n) },
    r = { value: t.state }
  r.value ||
    o(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
      },
      !0
    )
  function o(l, d, f) {
    const h = e.indexOf('#'),
      p = h > -1 ? (n.host && document.querySelector('base') ? e : e.slice(h)) + l : uu() + e + l
    try {
      t[f ? 'replaceState' : 'pushState'](d, '', p), (r.value = d)
    } catch (m) {
      console.error(m), n[f ? 'replace' : 'assign'](p)
    }
  }
  function i(l, d) {
    const f = X({}, t.state, $r(r.value.back, l, r.value.forward, !0), d, {
      position: r.value.position
    })
    o(l, f, !0), (s.value = l)
  }
  function u(l, d) {
    const f = X({}, r.value, t.state, { forward: l, scroll: Un() })
    o(f.current, f, !0)
    const h = X({}, $r(s.value, l, null), { position: f.position + 1 }, d)
    o(l, h, !1), (s.value = l)
  }
  return { location: s, state: r, push: u, replace: i }
}
function du(e) {
  e = nu(e)
  const t = au(e),
    n = fu(e, t.state, t.location, t.replace)
  function s(o, i = !0) {
    i || n.pauseListeners(), history.go(o)
  }
  const r = X({ location: '', base: e, go: s, createHref: ru.bind(null, e) }, t, n)
  return (
    Object.defineProperty(r, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(r, 'state', { enumerable: !0, get: () => t.state.value }),
    r
  )
}
function hu(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    du(e)
  )
}
function pu(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function ti(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const Xe = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0
  },
  ni = Symbol('')
var Tr
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(Tr || (Tr = {}))
function Mt(e, t) {
  return X(new Error(), { type: e, [ni]: !0 }, t)
}
function Ke(e, t) {
  return e instanceof Error && ni in e && (t == null || !!(e.type & t))
}
const Mr = '[^/]+?',
  gu = { sensitive: !1, strict: !1, start: !0, end: !0 },
  mu = /[.+*?^${}()[\]/\\]/g
function _u(e, t) {
  const n = X({}, gu, t),
    s = []
  let r = n.start ? '^' : ''
  const o = []
  for (const d of e) {
    const f = d.length ? [] : [90]
    n.strict && !d.length && (r += '/')
    for (let h = 0; h < d.length; h++) {
      const p = d[h]
      let m = 40 + (n.sensitive ? 0.25 : 0)
      if (p.type === 0) h || (r += '/'), (r += p.value.replace(mu, '\\$&')), (m += 40)
      else if (p.type === 1) {
        const { value: S, repeatable: $, optional: H, regexp: T } = p
        o.push({ name: S, repeatable: $, optional: H })
        const B = T || Mr
        if (B !== Mr) {
          m += 10
          try {
            new RegExp(`(${B})`)
          } catch (Q) {
            throw new Error(`Invalid custom RegExp for param "${S}" (${B}): ` + Q.message)
          }
        }
        let U = $ ? `((?:${B})(?:/(?:${B}))*)` : `(${B})`
        h || (U = H && d.length < 2 ? `(?:/${U})` : '/' + U),
          H && (U += '?'),
          (r += U),
          (m += 20),
          H && (m += -8),
          $ && (m += -20),
          B === '.*' && (m += -50)
      }
      f.push(m)
    }
    s.push(f)
  }
  if (n.strict && n.end) {
    const d = s.length - 1
    s[d][s[d].length - 1] += 0.7000000000000001
  }
  n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && (r += '(?:/|$)')
  const i = new RegExp(r, n.sensitive ? '' : 'i')
  function u(d) {
    const f = d.match(i),
      h = {}
    if (!f) return null
    for (let p = 1; p < f.length; p++) {
      const m = f[p] || '',
        S = o[p - 1]
      h[S.name] = m && S.repeatable ? m.split('/') : m
    }
    return h
  }
  function l(d) {
    let f = '',
      h = !1
    for (const p of e) {
      ;(!h || !f.endsWith('/')) && (f += '/'), (h = !1)
      for (const m of p)
        if (m.type === 0) f += m.value
        else if (m.type === 1) {
          const { value: S, repeatable: $, optional: H } = m,
            T = S in d ? d[S] : ''
          if (Me(T) && !$)
            throw new Error(
              `Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`
            )
          const B = Me(T) ? T.join('/') : T
          if (!B)
            if (H) p.length < 2 && (f.endsWith('/') ? (f = f.slice(0, -1)) : (h = !0))
            else throw new Error(`Missing required param "${S}"`)
          f += B
        }
    }
    return f || '/'
  }
  return { re: i, score: s, keys: o, parse: u, stringify: l }
}
function yu(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n]
    if (s) return s
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0
}
function bu(e, t) {
  let n = 0
  const s = e.score,
    r = t.score
  for (; n < s.length && n < r.length; ) {
    const o = yu(s[n], r[n])
    if (o) return o
    n++
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (Lr(s)) return 1
    if (Lr(r)) return -1
  }
  return r.length - s.length
}
function Lr(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const vu = { type: 0, value: '' },
  wu = /[a-zA-Z0-9_]/
function Eu(e) {
  if (!e) return [[]]
  if (e === '/') return [[vu]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(m) {
    throw new Error(`ERR (${n})/"${d}": ${m}`)
  }
  let n = 0,
    s = n
  const r = []
  let o
  function i() {
    o && r.push(o), (o = [])
  }
  let u = 0,
    l,
    d = '',
    f = ''
  function h() {
    d &&
      (n === 0
        ? o.push({ type: 0, value: d })
        : n === 1 || n === 2 || n === 3
          ? (o.length > 1 &&
              (l === '*' || l === '+') &&
              t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),
            o.push({
              type: 1,
              value: d,
              regexp: f,
              repeatable: l === '*' || l === '+',
              optional: l === '*' || l === '?'
            }))
          : t('Invalid state to consume buffer'),
      (d = ''))
  }
  function p() {
    d += l
  }
  for (; u < e.length; ) {
    if (((l = e[u++]), l === '\\' && n !== 2)) {
      ;(s = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        l === '/' ? (d && h(), i()) : l === ':' ? (h(), (n = 1)) : p()
        break
      case 4:
        p(), (n = s)
        break
      case 1:
        l === '('
          ? (n = 2)
          : wu.test(l)
            ? p()
            : (h(), (n = 0), l !== '*' && l !== '?' && l !== '+' && u--)
        break
      case 2:
        l === ')' ? (f[f.length - 1] == '\\' ? (f = f.slice(0, -1) + l) : (n = 3)) : (f += l)
        break
      case 3:
        h(), (n = 0), l !== '*' && l !== '?' && l !== '+' && u--, (f = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), h(), i(), r
}
function xu(e, t, n) {
  const s = _u(Eu(e.path), n),
    r = X(s, { record: e, parent: t, children: [], alias: [] })
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}
function Cu(e, t) {
  const n = [],
    s = new Map()
  t = Br({ strict: !1, end: !0, sensitive: !1 }, t)
  function r(f) {
    return s.get(f)
  }
  function o(f, h, p) {
    const m = !p,
      S = Ru(f)
    S.aliasOf = p && p.record
    const $ = Br(t, f),
      H = [S]
    if ('alias' in f) {
      const U = typeof f.alias == 'string' ? [f.alias] : f.alias
      for (const Q of U)
        H.push(
          X({}, S, {
            components: p ? p.record.components : S.components,
            path: Q,
            aliasOf: p ? p.record : S
          })
        )
    }
    let T, B
    for (const U of H) {
      const { path: Q } = U
      if (h && Q[0] !== '/') {
        const ie = h.record.path,
          K = ie[ie.length - 1] === '/' ? '' : '/'
        U.path = h.record.path + (Q && K + Q)
      }
      if (
        ((T = xu(U, h, $)),
        p
          ? p.alias.push(T)
          : ((B = B || T), B !== T && B.alias.push(T), m && f.name && !Fr(T) && i(f.name)),
        S.children)
      ) {
        const ie = S.children
        for (let K = 0; K < ie.length; K++) o(ie[K], T, p && p.children[K])
      }
      ;(p = p || T),
        ((T.record.components && Object.keys(T.record.components).length) ||
          T.record.name ||
          T.record.redirect) &&
          l(T)
    }
    return B
      ? () => {
          i(B)
        }
      : Gt
  }
  function i(f) {
    if (ti(f)) {
      const h = s.get(f)
      h && (s.delete(f), n.splice(n.indexOf(h), 1), h.children.forEach(i), h.alias.forEach(i))
    } else {
      const h = n.indexOf(f)
      h > -1 &&
        (n.splice(h, 1),
        f.record.name && s.delete(f.record.name),
        f.children.forEach(i),
        f.alias.forEach(i))
    }
  }
  function u() {
    return n
  }
  function l(f) {
    let h = 0
    for (
      ;
      h < n.length && bu(f, n[h]) >= 0 && (f.record.path !== n[h].record.path || !si(f, n[h]));

    )
      h++
    n.splice(h, 0, f), f.record.name && !Fr(f) && s.set(f.record.name, f)
  }
  function d(f, h) {
    let p,
      m = {},
      S,
      $
    if ('name' in f && f.name) {
      if (((p = s.get(f.name)), !p)) throw Mt(1, { location: f })
      ;($ = p.record.name),
        (m = X(
          Nr(
            h.params,
            p.keys
              .filter((B) => !B.optional)
              .concat(p.parent ? p.parent.keys.filter((B) => B.optional) : [])
              .map((B) => B.name)
          ),
          f.params &&
            Nr(
              f.params,
              p.keys.map((B) => B.name)
            )
        )),
        (S = p.stringify(m))
    } else if (f.path != null)
      (S = f.path), (p = n.find((B) => B.re.test(S))), p && ((m = p.parse(S)), ($ = p.record.name))
    else {
      if (((p = h.name ? s.get(h.name) : n.find((B) => B.re.test(h.path))), !p))
        throw Mt(1, { location: f, currentLocation: h })
      ;($ = p.record.name), (m = X({}, h.params, f.params)), (S = p.stringify(m))
    }
    const H = []
    let T = p
    for (; T; ) H.unshift(T.record), (T = T.parent)
    return { name: $, path: S, params: m, matched: H, meta: Pu(H) }
  }
  return (
    e.forEach((f) => o(f)),
    { addRoute: o, resolve: d, removeRoute: i, getRoutes: u, getRecordMatcher: r }
  )
}
function Nr(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function Ru(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Su(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component }
  }
}
function Su(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n
  return t
}
function Fr(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Pu(e) {
  return e.reduce((t, n) => X(t, n.meta), {})
}
function Br(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
function si(e, t) {
  return t.children.some((n) => n === e || si(e, n))
}
function Ou(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const s = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let r = 0; r < s.length; ++r) {
    const o = s[r].replace(Qo, ' '),
      i = o.indexOf('='),
      u = en(i < 0 ? o : o.slice(0, i)),
      l = i < 0 ? null : en(o.slice(i + 1))
    if (u in t) {
      let d = t[u]
      Me(d) || (d = t[u] = [d]), d.push(l)
    } else t[u] = l
  }
  return t
}
function jr(e) {
  let t = ''
  for (let n in e) {
    const s = e[n]
    if (((n = qc(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Me(s) ? s.map((o) => o && ys(o)) : [s && ys(s)]).forEach((o) => {
      o !== void 0 && ((t += (t.length ? '&' : '') + n), o != null && (t += '=' + o))
    })
  }
  return t
}
function Au(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = Me(s) ? s.map((r) => (r == null ? null : '' + r)) : s == null ? s : '' + s)
  }
  return t
}
const Iu = Symbol(''),
  kr = Symbol(''),
  Ks = Symbol(''),
  ri = Symbol(''),
  vs = Symbol('')
function kt() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s)
        r > -1 && e.splice(r, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function st(e, t, n, s, r, o = (i) => i()) {
  const i = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || [])
  return () =>
    new Promise((u, l) => {
      const d = (p) => {
          p === !1
            ? l(Mt(4, { from: n, to: t }))
            : p instanceof Error
              ? l(p)
              : pu(p)
                ? l(Mt(2, { from: t, to: p }))
                : (i && s.enterCallbacks[r] === i && typeof p == 'function' && i.push(p), u())
        },
        f = o(() => e.call(s && s.instances[r], t, n, d))
      let h = Promise.resolve(f)
      e.length < 3 && (h = h.then(d)), h.catch((p) => l(p))
    })
}
function ts(e, t, n, s, r = (o) => o()) {
  const o = []
  for (const i of e)
    for (const u in i.components) {
      let l = i.components[u]
      if (!(t !== 'beforeRouteEnter' && !i.instances[u]))
        if ($u(l)) {
          const f = (l.__vccOpts || l)[t]
          f && o.push(st(f, n, s, i, u, r))
        } else {
          let d = l()
          o.push(() =>
            d.then((f) => {
              if (!f)
                return Promise.reject(new Error(`Couldn't resolve component "${u}" at "${i.path}"`))
              const h = Fc(f) ? f.default : f
              i.components[u] = h
              const m = (h.__vccOpts || h)[t]
              return m && st(m, n, s, i, u, r)()
            })
          )
        }
    }
  return o
}
function $u(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function Hr(e) {
  const t = We(Ks),
    n = We(ri),
    s = xe(() => t.resolve(k(e.to))),
    r = xe(() => {
      const { matched: l } = s.value,
        { length: d } = l,
        f = l[d - 1],
        h = n.matched
      if (!f || !h.length) return -1
      const p = h.findIndex(Tt.bind(null, f))
      if (p > -1) return p
      const m = Vr(l[d - 2])
      return d > 1 && Vr(f) === m && h[h.length - 1].path !== m
        ? h.findIndex(Tt.bind(null, l[d - 2]))
        : p
    }),
    o = xe(() => r.value > -1 && Nu(n.params, s.value.params)),
    i = xe(() => r.value > -1 && r.value === n.matched.length - 1 && Zo(n.params, s.value.params))
  function u(l = {}) {
    return Lu(l) ? t[k(e.replace) ? 'replace' : 'push'](k(e.to)).catch(Gt) : Promise.resolve()
  }
  return { route: s, href: xe(() => s.value.href), isActive: o, isExactActive: i, navigate: u }
}
const Tu = bt({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' }
    },
    useLink: Hr,
    setup(e, { slots: t }) {
      const n = Tn(Hr(e)),
        { options: s } = We(Ks),
        r = xe(() => ({
          [Ur(e.activeClass, s.linkActiveClass, 'router-link-active')]: n.isActive,
          [Ur(e.exactActiveClass, s.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive
        }))
      return () => {
        const o = t.default && t.default(n)
        return e.custom
          ? o
          : Wo(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value
              },
              o
            )
      }
    }
  }),
  Mu = Tu
function Lu(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function Nu(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n]
    if (typeof s == 'string') {
      if (s !== r) return !1
    } else if (!Me(r) || r.length !== s.length || s.some((o, i) => o !== r[i])) return !1
  }
  return !0
}
function Vr(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const Ur = (e, t, n) => e ?? t ?? n,
  Fu = bt({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = We(vs),
        r = xe(() => e.route || s.value),
        o = We(kr, 0),
        i = xe(() => {
          let d = k(o)
          const { matched: f } = r.value
          let h
          for (; (h = f[d]) && !h.components; ) d++
          return d
        }),
        u = xe(() => r.value.matched[i.value])
      pn(
        kr,
        xe(() => i.value + 1)
      ),
        pn(Iu, u),
        pn(vs, r)
      const l = Mn()
      return (
        hn(
          () => [l.value, u.value, e.name],
          ([d, f, h], [p, m, S]) => {
            f &&
              ((f.instances[h] = d),
              m &&
                m !== f &&
                d &&
                d === p &&
                (f.leaveGuards.size || (f.leaveGuards = m.leaveGuards),
                f.updateGuards.size || (f.updateGuards = m.updateGuards))),
              d && f && (!m || !Tt(f, m) || !p) && (f.enterCallbacks[h] || []).forEach(($) => $(d))
          },
          { flush: 'post' }
        ),
        () => {
          const d = r.value,
            f = e.name,
            h = u.value,
            p = h && h.components[f]
          if (!p) return Kr(n.default, { Component: p, route: d })
          const m = h.props[f],
            S = m ? (m === !0 ? d.params : typeof m == 'function' ? m(d) : m) : null,
            H = Wo(
              p,
              X({}, S, t, {
                onVnodeUnmounted: (T) => {
                  T.component.isUnmounted && (h.instances[f] = null)
                },
                ref: l
              })
            )
          return Kr(n.default, { Component: H, route: d }) || H
        }
      )
    }
  })
function Kr(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const Bu = Fu
function ju(e) {
  const t = Cu(e.routes, e),
    n = e.parseQuery || Ou,
    s = e.stringifyQuery || jr,
    r = e.history,
    o = kt(),
    i = kt(),
    u = kt(),
    l = Hi(Xe)
  let d = Xe
  Rt && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const f = Zn.bind(null, (y) => '' + y),
    h = Zn.bind(null, Qc),
    p = Zn.bind(null, en)
  function m(y, P) {
    let C, A
    return ti(y) ? ((C = t.getRecordMatcher(y)), (A = P)) : (A = y), t.addRoute(A, C)
  }
  function S(y) {
    const P = t.getRecordMatcher(y)
    P && t.removeRoute(P)
  }
  function $() {
    return t.getRoutes().map((y) => y.record)
  }
  function H(y) {
    return !!t.getRecordMatcher(y)
  }
  function T(y, P) {
    if (((P = X({}, P || l.value)), typeof y == 'string')) {
      const a = es(n, y, P.path),
        g = t.resolve({ path: a.path }, P),
        b = r.createHref(a.fullPath)
      return X(a, g, { params: p(g.params), hash: en(a.hash), redirectedFrom: void 0, href: b })
    }
    let C
    if (y.path != null) C = X({}, y, { path: es(n, y.path, P.path).path })
    else {
      const a = X({}, y.params)
      for (const g in a) a[g] == null && delete a[g]
      ;(C = X({}, y, { params: h(a) })), (P.params = h(P.params))
    }
    const A = t.resolve(C, P),
      J = y.hash || ''
    A.params = f(p(A.params))
    const se = Xc(s, X({}, y, { hash: Wc(J), path: A.path })),
      c = r.createHref(se)
    return X({ fullPath: se, hash: J, query: s === jr ? Au(y.query) : y.query || {} }, A, {
      redirectedFrom: void 0,
      href: c
    })
  }
  function B(y) {
    return typeof y == 'string' ? es(n, y, l.value.path) : X({}, y)
  }
  function U(y, P) {
    if (d !== y) return Mt(8, { from: P, to: y })
  }
  function Q(y) {
    return ye(y)
  }
  function ie(y) {
    return Q(X(B(y), { replace: !0 }))
  }
  function K(y) {
    const P = y.matched[y.matched.length - 1]
    if (P && P.redirect) {
      const { redirect: C } = P
      let A = typeof C == 'function' ? C(y) : C
      return (
        typeof A == 'string' &&
          ((A = A.includes('?') || A.includes('#') ? (A = B(A)) : { path: A }), (A.params = {})),
        X({ query: y.query, hash: y.hash, params: A.path != null ? {} : y.params }, A)
      )
    }
  }
  function ye(y, P) {
    const C = (d = T(y)),
      A = l.value,
      J = y.state,
      se = y.force,
      c = y.replace === !0,
      a = K(C)
    if (a)
      return ye(
        X(B(a), { state: typeof a == 'object' ? X({}, J, a.state) : J, force: se, replace: c }),
        P || C
      )
    const g = C
    g.redirectedFrom = P
    let b
    return (
      !se && Zc(s, A, C) && ((b = Mt(16, { to: g, from: A })), Fe(A, A, !0, !1)),
      (b ? Promise.resolve(b) : Le(g, A))
        .catch((_) => (Ke(_) ? (Ke(_, 2) ? _ : Ye(_)) : Y(_, g, A)))
        .then((_) => {
          if (_) {
            if (Ke(_, 2))
              return ye(
                X({ replace: c }, B(_.to), {
                  state: typeof _.to == 'object' ? X({}, J, _.to.state) : J,
                  force: se
                }),
                P || g
              )
          } else _ = ut(g, A, !0, c, J)
          return Qe(g, A, _), _
        })
    )
  }
  function Se(y, P) {
    const C = U(y, P)
    return C ? Promise.reject(C) : Promise.resolve()
  }
  function ct(y) {
    const P = Et.values().next().value
    return P && typeof P.runWithContext == 'function' ? P.runWithContext(y) : y()
  }
  function Le(y, P) {
    let C
    const [A, J, se] = ku(y, P)
    C = ts(A.reverse(), 'beforeRouteLeave', y, P)
    for (const a of A)
      a.leaveGuards.forEach((g) => {
        C.push(st(g, y, P))
      })
    const c = Se.bind(null, y, P)
    return (
      C.push(c),
      ge(C)
        .then(() => {
          C = []
          for (const a of o.list()) C.push(st(a, y, P))
          return C.push(c), ge(C)
        })
        .then(() => {
          C = ts(J, 'beforeRouteUpdate', y, P)
          for (const a of J)
            a.updateGuards.forEach((g) => {
              C.push(st(g, y, P))
            })
          return C.push(c), ge(C)
        })
        .then(() => {
          C = []
          for (const a of se)
            if (a.beforeEnter)
              if (Me(a.beforeEnter)) for (const g of a.beforeEnter) C.push(st(g, y, P))
              else C.push(st(a.beforeEnter, y, P))
          return C.push(c), ge(C)
        })
        .then(
          () => (
            y.matched.forEach((a) => (a.enterCallbacks = {})),
            (C = ts(se, 'beforeRouteEnter', y, P, ct)),
            C.push(c),
            ge(C)
          )
        )
        .then(() => {
          C = []
          for (const a of i.list()) C.push(st(a, y, P))
          return C.push(c), ge(C)
        })
        .catch((a) => (Ke(a, 8) ? a : Promise.reject(a)))
    )
  }
  function Qe(y, P, C) {
    u.list().forEach((A) => ct(() => A(y, P, C)))
  }
  function ut(y, P, C, A, J) {
    const se = U(y, P)
    if (se) return se
    const c = P === Xe,
      a = Rt ? history.state : {}
    C &&
      (A || c
        ? r.replace(y.fullPath, X({ scroll: c && a && a.scroll }, J))
        : r.push(y.fullPath, J)),
      (l.value = y),
      Fe(y, P, C, c),
      Ye()
  }
  let Ne
  function Nt() {
    Ne ||
      (Ne = r.listen((y, P, C) => {
        if (!sn.listening) return
        const A = T(y),
          J = K(A)
        if (J) {
          ye(X(J, { replace: !0 }), A).catch(Gt)
          return
        }
        d = A
        const se = l.value
        Rt && lu(Ir(se.fullPath, C.delta), Un()),
          Le(A, se)
            .catch((c) =>
              Ke(c, 12)
                ? c
                : Ke(c, 2)
                  ? (ye(c.to, A)
                      .then((a) => {
                        Ke(a, 20) && !C.delta && C.type === tn.pop && r.go(-1, !1)
                      })
                      .catch(Gt),
                    Promise.reject())
                  : (C.delta && r.go(-C.delta, !1), Y(c, A, se))
            )
            .then((c) => {
              ;(c = c || ut(A, se, !1)),
                c &&
                  (C.delta && !Ke(c, 8)
                    ? r.go(-C.delta, !1)
                    : C.type === tn.pop && Ke(c, 20) && r.go(-1, !1)),
                Qe(A, se, c)
            })
            .catch(Gt)
      }))
  }
  let vt = kt(),
    ue = kt(),
    Z
  function Y(y, P, C) {
    Ye(y)
    const A = ue.list()
    return A.length ? A.forEach((J) => J(y, P, C)) : console.error(y), Promise.reject(y)
  }
  function Ue() {
    return Z && l.value !== Xe
      ? Promise.resolve()
      : new Promise((y, P) => {
          vt.add([y, P])
        })
  }
  function Ye(y) {
    return Z || ((Z = !y), Nt(), vt.list().forEach(([P, C]) => (y ? C(y) : P())), vt.reset()), y
  }
  function Fe(y, P, C, A) {
    const { scrollBehavior: J } = e
    if (!Rt || !J) return Promise.resolve()
    const se =
      (!C && cu(Ir(y.fullPath, 0))) || ((A || !C) && history.state && history.state.scroll) || null
    return yo()
      .then(() => J(y, P, se))
      .then((c) => c && iu(c))
      .catch((c) => Y(c, y, P))
  }
  const ve = (y) => r.go(y)
  let wt
  const Et = new Set(),
    sn = {
      currentRoute: l,
      listening: !0,
      addRoute: m,
      removeRoute: S,
      hasRoute: H,
      getRoutes: $,
      resolve: T,
      options: e,
      push: Q,
      replace: ie,
      go: ve,
      back: () => ve(-1),
      forward: () => ve(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: u.add,
      onError: ue.add,
      isReady: Ue,
      install(y) {
        const P = this
        y.component('RouterLink', Mu),
          y.component('RouterView', Bu),
          (y.config.globalProperties.$router = P),
          Object.defineProperty(y.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => k(l)
          }),
          Rt && !wt && l.value === Xe && ((wt = !0), Q(r.location).catch((J) => {}))
        const C = {}
        for (const J in Xe) Object.defineProperty(C, J, { get: () => l.value[J], enumerable: !0 })
        y.provide(Ks, P), y.provide(ri, fo(C)), y.provide(vs, l)
        const A = y.unmount
        Et.add(y),
          (y.unmount = function () {
            Et.delete(y),
              Et.size < 1 &&
                ((d = Xe), Ne && Ne(), (Ne = null), (l.value = Xe), (wt = !1), (Z = !1)),
              A()
          })
      }
    }
  function ge(y) {
    return y.reduce((P, C) => P.then(() => ct(C)), Promise.resolve())
  }
  return sn
}
function ku(e, t) {
  const n = [],
    s = [],
    r = [],
    o = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < o; i++) {
    const u = t.matched[i]
    u && (e.matched.find((d) => Tt(d, u)) ? s.push(u) : n.push(u))
    const l = e.matched[i]
    l && (t.matched.find((d) => Tt(d, l)) || r.push(l))
  }
  return [n, s, r]
}
const Sn = () => 'Aer',
  Hu = ['href'],
  Vu = { key: 0 },
  Uu = ['disabled'],
  Ku = { key: 0 },
  Du = bt({
    name: 'Button',
    __name: 'button',
    props: {
      disabled: { type: Boolean, default: !1 },
      loading: { type: Boolean, default: !1 },
      size: { default: 'medium' },
      shape: { default: 'square' },
      status: { default: 'normal' },
      target: {},
      type: { default: 'default' }
    },
    emits: ['click'],
    setup(e, { emit: t }) {
      const n = e,
        s = t,
        r = xe(() => [
          'element',
          `${n.size ?? 'medium'}`,
          `${n.shape ?? 'square'}`,
          `${n.status ?? 'normal'}`,
          `${n.type ?? 'default'}`,
          { disabled: n.disabled }
        ])
      function o(i) {
        if (n.loading || n.disabled) {
          i.preventDefault()
          return
        }
        i.currentTarget.blur(), s('click', i)
      }
      return (i, u) =>
        i.target
          ? (le(),
            me(
              'a',
              { key: 0, class: mt([r.value]), href: i.target, onClick: o },
              [
                De(i.$slots, 'default', {}, void 0, !0),
                i.loading
                  ? (le(), me('span', Vu, [De(i.$slots, 'icon', {}, void 0, !0)]))
                  : et('', !0)
              ],
              10,
              Hu
            ))
          : (le(),
            me(
              'button',
              { key: 1, class: mt([r.value]), disabled: i.disabled, onClick: o },
              [
                De(i.$slots, 'default', {}, void 0, !0),
                i.loading
                  ? (le(), me('span', Ku, [De(i.$slots, 'icon', {}, void 0, !0)]))
                  : et('', !0)
              ],
              10,
              Uu
            ))
    }
  }),
  Ds = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  ns = Ds(Du, [['__scopeId', 'data-v-2d3dea17']]),
  ss = Object.assign(
    { name: 'ButtonGroup' },
    {
      __name: 'button-group',
      setup(e) {
        return (t, n) => (le(), me('div', null, [De(t.$slots, 'default')]))
      }
    }
  ),
  te = Object.assign(ns, {
    Group: ss,
    install: (e) => {
      e.component(Sn() + ns.name, ns), e.component(Sn() + ss.name, ss)
    }
  }),
  zu = z('h1', null, 'test', -1),
  Wu = { class: 'element' },
  qu = z('br', null, null, -1),
  Gu = z('br', null, null, -1),
  Qu = z('br', null, null, -1),
  Yu = z('br', null, null, -1),
  Ju = z('br', null, null, -1),
  Xu = z('br', null, null, -1),
  Zu = z('br', null, null, -1),
  ef = z('br', null, null, -1),
  Dr = bt({
    __name: 'button-show',
    setup(e) {
      function t() {
        console.log('我爱你')
      }
      return (n, s) => (
        le(),
        me(
          Ee,
          null,
          [
            I(
              k(te),
              { type: 'primary', onClick: t },
              { default: N(() => [D('我是primary按钮')]), _: 1 }
            ),
            I(
              k(te),
              { type: 'dashed', onClick: t, disabled: '' },
              { default: N(() => [D('我是dashed按钮')]), _: 1 }
            ),
            I(
              k(te),
              { type: 'link', target: 'https://www.baidu.com/', disabled: '' },
              { default: N(() => [D('我是link按钮')]), _: 1 }
            ),
            I(
              k(te),
              { type: 'link', target: 'https://www.baidu.com/' },
              { default: N(() => [D('我是link按钮')]), _: 1 }
            ),
            I(
              k(te),
              { type: 'text', size: 'large', onClick: t },
              { default: N(() => [D('我是text按钮')]), _: 1 }
            ),
            I(
              k(te),
              { type: 'default', size: 'small' },
              { default: N(() => [D('我是default按钮')]), _: 1 }
            ),
            zu,
            z('div', Wu, [
              I(
                k(te),
                { type: 'primary', shape: 'square' },
                { default: N(() => [D('我是primary按钮')]), _: 1 }
              )
            ]),
            I(
              k(te),
              { type: 'primary', shape: 'square', status: 'success' },
              { default: N(() => [D('我是primary按钮')]), _: 1 }
            ),
            I(
              k(te),
              { type: 'primary', shape: 'square', status: 'warning' },
              { default: N(() => [D('我是primary按钮')]), _: 1 }
            ),
            I(
              k(te),
              { type: 'primary', shape: 'square', status: 'danger' },
              { default: N(() => [D('我是primary按钮')]), _: 1 }
            ),
            qu,
            Gu,
            I(k(te), { type: 'default' }, { default: N(() => [D('我是default按钮')]), _: 1 }),
            I(
              k(te),
              { type: 'default', status: 'success' },
              { default: N(() => [D('我是default按钮')]), _: 1 }
            ),
            I(
              k(te),
              { type: 'default', status: 'warning' },
              { default: N(() => [D('我是default按钮')]), _: 1 }
            ),
            I(
              k(te),
              { type: 'default', status: 'danger' },
              { default: N(() => [D('我是default按钮')]), _: 1 }
            ),
            Qu,
            Yu,
            I(k(te), { type: 'dashed' }, { default: N(() => [D('我是dashed按钮')]), _: 1 }),
            I(
              k(te),
              { type: 'dashed', status: 'success' },
              { default: N(() => [D('我是dashed按钮')]), _: 1 }
            ),
            I(
              k(te),
              { type: 'dashed', status: 'warning' },
              { default: N(() => [D('我是dashed按钮')]), _: 1 }
            ),
            I(
              k(te),
              { type: 'dashed', status: 'danger' },
              { default: N(() => [D('我是dashed按钮')]), _: 1 }
            ),
            Ju,
            Xu,
            I(k(te), { type: 'text' }, { default: N(() => [D('我是text按钮')]), _: 1 }),
            I(
              k(te),
              { type: 'text', status: 'success' },
              { default: N(() => [D('我是text按钮')]), _: 1 }
            ),
            I(
              k(te),
              { type: 'text', status: 'warning' },
              { default: N(() => [D('我是text按钮')]), _: 1 }
            ),
            I(
              k(te),
              { type: 'text', status: 'danger' },
              { default: N(() => [D('我是text按钮')]), _: 1 }
            ),
            Zu,
            ef,
            I(k(te), { type: 'link' }, { default: N(() => [D('我是link按钮')]), _: 1 }),
            I(
              k(te),
              { type: 'link', status: 'success' },
              { default: N(() => [D('我是link按钮')]), _: 1 }
            ),
            I(
              k(te),
              { type: 'link', status: 'warning' },
              { default: N(() => [D('我是link按钮')]), _: 1 }
            ),
            I(
              k(te),
              { type: 'link', status: 'danger' },
              { default: N(() => [D('我是link按钮')]), _: 1 }
            )
          ],
          64
        )
      )
    }
  }),
  oi = (e) => (xo('data-v-7df007fb'), (e = e()), Co(), e),
  tf = { class: 'dialogWrapper' },
  nf = { class: 'dialog' },
  sf = { class: 'dialogHeader' },
  rf = { class: 'dialogHeaderTitle' },
  of = { class: 'dialogBody' },
  lf = oi(() =>
    z(
      'div',
      { class: 'dialogFooter' },
      [
        z('button', { class: 'dialogFooterButton' }, '取消'),
        z('button', { class: 'dialogFooterButton' }, '确定')
      ],
      -1
    )
  ),
  cf = oi(() => z('div', null, '对照', -1)),
  uf = bt({
    name: 'Dialog',
    __name: 'dialog',
    props: { title: {}, value: {}, visible: { type: Boolean, default: !0 } },
    emits: ['opened', 'closed'],
    setup(e, { emit: t }) {
      let s = Mn(e.visible)
      return (r, o) =>
        Po(
          (le(),
          me(
            'div',
            tf,
            [
              D(' 包裹 '),
              z('div', nf, [
                z('div', sf, [
                  z('span', rf, yn(r.title), 1),
                  z(
                    'button',
                    {
                      class: 'dialogHeaderButton',
                      onClick: o[0] || (o[0] = (i) => (pe(s) ? (s.value = !k(s)) : (s = !k(s))))
                    },
                    'x'
                  )
                ]),
                z('div', of, [z('div', null, yn(r.value), 1)]),
                lf
              ]),
              cf
            ],
            512
          )),
          [[oc, k(s)]]
        )
    }
  }),
  rs = Ds(uf, [['__scopeId', 'data-v-7df007fb']]),
  ff = Object.assign(rs, {
    install: (e) => {
      e.component(Sn() + rs.name, rs)
    }
  }),
  af = {
    __name: 'dialog-show',
    setup(e) {
      return (t, n) => (le(), Hs(k(ff)))
    }
  },
  df = { key: 0, class: 'prepend' },
  hf = { key: 1, class: 'prefix' },
  pf = ['disabled', 'placeholder', 'maxlength'],
  gf = { key: 2, class: 'styleCount' },
  mf = { key: 4, class: 'suffix' },
  _f = { key: 5, class: 'append' },
  os = bt({
    name: 'Input',
    __name: 'input',
    props: or(
      {
        defaultValue: {},
        disabled: { type: Boolean, default: !1 },
        maxLength: { default: 100 },
        placeholder: {},
        readOnly: { type: Boolean, default: !1 },
        showClear: { type: Boolean, default: !1 },
        showCount: { type: Boolean, default: !1 },
        size: { default: 'medium' },
        status: { default: 'normal' },
        type: { default: 'text' }
      },
      { modelValue: {}, modelModifiers: {} }
    ),
    emits: or(['blur', 'change', 'clear', 'input', 'pressEnter', 'focus'], ['update:modelValue']),
    setup(e, { emit: t }) {
      const n = Xl(e, 'modelValue'),
        s = e,
        r = t
      Io(() => {
        ;(n.value = s.defaultValue || n.value),
          s.maxLength != 100 && (n.value = String(n.value).slice(0, s.maxLength))
      })
      const o = xe(() => ['cls', `${s.size ?? 'medium'}`, { disabled: s.disabled }]),
        i = xe(() => `${String(n.value).replace(/\n|\r/, '').length}/${s.maxLength}`),
        u = (m) => {
          r('blur', m)
        },
        l = (m) => {
          const S = m.target.value
          r('change', S, m)
        },
        d = (m) => {
          ;(n.value = ''), r('clear', m)
        },
        f = (m) => {
          r('focus', m)
        },
        h = (m) => {
          const S = m.target.value
          r('input', S, m)
        },
        p = (m) => {
          r('pressEnter', m)
        }
      return (m, S) => (
        le(),
        me(
          'span',
          { class: mt([[o.value], 'newInput']) },
          [
            m.$slots.prepend ? (le(), me('span', df, [De(m.$slots, 'prepend')])) : et('', !0),
            m.$slots.prefix ? (le(), me('span', hf, [De(m.$slots, 'prefix')])) : et('', !0),
            Po(
              z(
                'input',
                {
                  'onUpdate:modelValue': S[0] || (S[0] = ($) => (n.value = $)),
                  class: mt([o.value]),
                  disabled: m.disabled,
                  placeholder: m.placeholder,
                  maxlength: m.maxLength,
                  onBlur: u,
                  onChange: l,
                  onFocus: f,
                  onInput: h,
                  onKeydown: Cc(p, ['enter'])
                },
                null,
                42,
                pf
              ),
              [[Ec, n.value]]
            ),
            m.showCount ? (le(), me('span', gf, yn(i.value), 1)) : et('', !0),
            m.showClear
              ? (le(),
                me(
                  'span',
                  { key: 3, class: 'styleClear', onClick: S[1] || (S[1] = ($) => d($)) },
                  'x'
                ))
              : et('', !0),
            m.$slots.suffix ? (le(), me('span', mf, [De(m.$slots, 'suffix')])) : et('', !0),
            m.$slots.append ? (le(), me('span', _f, [De(m.$slots, 'append')])) : et('', !0)
          ],
          2
        )
      )
    }
  }),
  Ht = Object.assign(os, {
    install: (e) => {
      e.component(Sn() + os.name, os)
    }
  }),
  Ge = (e) => (xo('data-v-96d18cfa'), (e = e()), Co(), e),
  yf = Ge(() => z('br', null, null, -1)),
  bf = Ge(() => z('br', null, null, -1)),
  vf = Ge(() => z('br', null, null, -1)),
  wf = Ge(() => z('br', null, null, -1)),
  Ef = Ge(() => z('div', null, '前缀元素', -1)),
  xf = Ge(() => z('br', null, null, -1)),
  Cf = Ge(() => z('br', null, null, -1)),
  Rf = Ge(() => z('br', null, null, -1)),
  Sf = Ge(() => z('br', null, null, -1)),
  Pf = {
    __name: 'input-show',
    setup(e) {
      var t = Mn('我没变')
      return (n, s) => {
        const r = dn('AerButton')
        return (
          le(),
          me(
            Ee,
            null,
            [
              I(
                k(Ht),
                {
                  placeholder: '这是默认输入框',
                  size: 'large',
                  modelValue: k(t),
                  'onUpdate:modelValue': s[0] || (s[0] = (o) => (pe(t) ? (t.value = o) : (t = o)))
                },
                null,
                8,
                ['modelValue']
              ),
              z('label', null, yn(k(t)), 1),
              yf,
              bf,
              I(
                k(Ht),
                {
                  placeholder: '这是默认输入框',
                  size: 'small',
                  modelValue: k(t),
                  'onUpdate:modelValue': s[1] || (s[1] = (o) => (pe(t) ? (t.value = o) : (t = o))),
                  disabled: ''
                },
                null,
                8,
                ['modelValue']
              ),
              vf,
              wf,
              I(
                k(Ht),
                { defaultValue: 'awerewersda', placeholder: '这是默认输入框', showClear: '' },
                {
                  append: N(() => [I(r, null, { default: N(() => [D('后置标签')]), _: 1 })]),
                  prepend: N(() => [I(r, null, { default: N(() => [D('前置标签')]), _: 1 })]),
                  prefix: N(() => [Ef]),
                  suffix: N(() => [D('后缀元素')]),
                  _: 1
                }
              ),
              xf,
              Cf,
              I(
                k(Ht),
                { defaultValue: 'awerewersda', placeholder: '这是默认输入框', showClear: '' },
                {
                  append: N(() => [I(r, null, { default: N(() => [D('后置标签')]), _: 1 })]),
                  prepend: N(() => [I(r, null, { default: N(() => [D('前置标签')]), _: 1 })]),
                  _: 1
                }
              ),
              Rf,
              Sf,
              I(
                k(Ht),
                {
                  defaultValue: 'awerewersda',
                  placeholder: '这是默认输入框',
                  showCount: '',
                  showClear: '',
                  maxLength: 10
                },
                {
                  append: N(() => [I(r, null, { default: N(() => [D('后置标签')]), _: 1 })]),
                  prepend: N(() => [I(r, null, { default: N(() => [D('前置标签')]), _: 1 })]),
                  _: 1
                }
              ),
              I(r, null, { default: N(() => [D('wo ')]), _: 1 })
            ],
            64
          )
        )
      }
    }
  },
  Of = Ds(Pf, [['__scopeId', 'data-v-96d18cfa']]),
  Af = [
    { path: '/', component: Dr },
    { path: '/Button', component: Dr },
    { path: '/Input', component: Of },
    { path: '/Dialog', component: af }
  ],
  If = ju({ history: hu(), routes: Af }),
  Kn = Pc(Nc)
Kn.use(Tc())
Kn.use(If)
Kn.use(te)
Kn.mount('#app')
