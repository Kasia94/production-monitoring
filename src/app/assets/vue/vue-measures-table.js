// @__NO_SIDE_EFFECTS__
function qe(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const B = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Et = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], X = () => {
}, So = () => !1, qt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), _n = (e) => e.startsWith("onUpdate:"), q = Object.assign, hs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Jr = Object.prototype.hasOwnProperty, R = (e, t) => Jr.call(e, t), C = Array.isArray, ct = (e) => Vn(e) === "[object Map]", Co = (e) => Vn(e) === "[object Set]", A = (e) => typeof e == "function", J = (e) => typeof e == "string", st = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", _s = (e) => (K(e) || A(e)) && A(e.then) && A(e.catch), To = Object.prototype.toString, Vn = (e) => To.call(e), gs = (e) => Vn(e).slice(8, -1), Sn = (e) => Vn(e) === "[object Object]", ms = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, It = /* @__PURE__ */ qe(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Yr = /* @__PURE__ */ qe(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Cn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, zr = /-\w/g, ae = Cn(
  (e) => e.replace(zr, (t) => t.slice(1).toUpperCase())
), Xr = /\B([A-Z])/g, ge = Cn(
  (e) => e.replace(Xr, "-$1").toLowerCase()
), Tn = Cn((e) => e.charAt(0).toUpperCase() + e.slice(1)), it = Cn(
  (e) => e ? `on${Tn(e)}` : ""
), ft = (e, t) => !Object.is(e, t), St = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, gn = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Zr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ws = (e) => {
  const t = J(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Bs;
const Gt = () => Bs || (Bs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function vs(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = J(s) ? ni(s) : vs(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (J(e) || K(e))
    return e;
}
const Qr = /;(?![^(]*\))/g, ei = /:([^]+)/, ti = /\/\*[^]*?\*\//g;
function ni(e) {
  const t = {};
  return e.replace(ti, "").split(Qr).forEach((n) => {
    if (n) {
      const s = n.split(ei);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Es(e) {
  let t = "";
  if (J(e))
    t = e;
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const s = Es(e[n]);
      s && (t += s + " ");
    }
  else if (K(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const si = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", oi = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ri = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", ii = /* @__PURE__ */ qe(si), li = /* @__PURE__ */ qe(oi), ci = /* @__PURE__ */ qe(ri), fi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ui = /* @__PURE__ */ qe(fi);
function Ao(e) {
  return !!e || e === "";
}
const Po = (e) => !!(e && e.__v_isRef === !0), Pt = (e) => J(e) ? e : e == null ? "" : C(e) || K(e) && (e.toString === To || !A(e.toString)) ? Po(e) ? Pt(e.value) : JSON.stringify(e, $o, 2) : String(e), $o = (e, t) => Po(t) ? $o(e, t.value) : ct(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[Un(s, r) + " =>"] = o, n),
    {}
  )
} : Co(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Un(n))
} : st(t) ? Un(t) : K(t) && !C(t) && !Sn(t) ? String(t) : t, Un = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    st(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Ve(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ue;
class ai {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ue, !t && ue && (this.index = (ue.scopes || (ue.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ue;
      try {
        return ue = this, t();
      } finally {
        ue = n;
      }
    } else process.env.NODE_ENV !== "production" && Ve("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ue, ue = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ue = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function pi() {
  return ue;
}
let U;
const Wn = /* @__PURE__ */ new WeakSet();
class Mo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ue && ue.active && ue.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Wn.has(this) && (Wn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ro(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ks(this), jo(this);
    const t = U, n = xe;
    U = this, xe = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && U !== this && Ve(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Fo(this), U = t, xe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ys(t);
      this.deps = this.depsTail = void 0, Ks(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Wn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Zn(this) && this.run();
  }
  get dirty() {
    return Zn(this);
  }
}
let Io = 0, Rt, jt;
function Ro(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = jt, jt = e;
    return;
  }
  e.next = Rt, Rt = e;
}
function bs() {
  Io++;
}
function Ns() {
  if (--Io > 0)
    return;
  if (jt) {
    let t = jt;
    for (jt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Rt; ) {
    let t = Rt;
    for (Rt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function jo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Fo(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), ys(s), di(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Zn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ho(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ho(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ut) || (e.globalVersion = Ut, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Zn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = U, s = xe;
  U = e, xe = !0;
  try {
    jo(e);
    const o = e.fn(e._value);
    (t.version === 0 || ft(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    U = n, xe = s, Fo(e), e.flags &= -3;
  }
}
function ys(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      ys(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function di(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let xe = !0;
const Lo = [];
function Se() {
  Lo.push(xe), xe = !1;
}
function Ce() {
  const e = Lo.pop();
  xe = e === void 0 ? !0 : e;
}
function Ks(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = U;
    U = void 0;
    try {
      t();
    } finally {
      U = n;
    }
  }
}
let Ut = 0;
class hi {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Uo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!U || !xe || U === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== U)
      n = this.activeLink = new hi(U, this), U.deps ? (n.prevDep = U.depsTail, U.depsTail.nextDep = n, U.depsTail = n) : U.deps = U.depsTail = n, Wo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = U.depsTail, n.nextDep = void 0, U.depsTail.nextDep = n, U.depsTail = n, U.deps === n && (U.deps = s);
    }
    return process.env.NODE_ENV !== "production" && U.onTrack && U.onTrack(
      q(
        {
          effect: U
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Ut++, this.notify(t);
  }
  notify(t) {
    bs();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            q(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ns();
    }
  }
}
function Wo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Wo(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Qn = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), es = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Wt = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function z(e, t, n) {
  if (xe && U) {
    let s = Qn.get(e);
    s || Qn.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Uo()), o.map = s, o.key = n), process.env.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function Re(e, t, n, s, o, r) {
  const i = Qn.get(e);
  if (!i) {
    Ut++;
    return;
  }
  const l = (f) => {
    f && (process.env.NODE_ENV !== "production" ? f.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: o,
      oldTarget: r
    }) : f.trigger());
  };
  if (bs(), t === "clear")
    i.forEach(l);
  else {
    const f = C(e), d = f && ms(n);
    if (f && n === "length") {
      const p = Number(s);
      i.forEach((a, g) => {
        (g === "length" || g === Wt || !st(g) && g >= p) && l(a);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), d && l(i.get(Wt)), t) {
        case "add":
          f ? d && l(i.get("length")) : (l(i.get(ut)), ct(e) && l(i.get(es)));
          break;
        case "delete":
          f || (l(i.get(ut)), ct(e) && l(i.get(es)));
          break;
        case "set":
          ct(e) && l(i.get(ut));
          break;
      }
  }
  Ns();
}
function _t(e) {
  const t = /* @__PURE__ */ M(e);
  return t === e ? t : (z(t, "iterate", Wt), /* @__PURE__ */ pe(e) ? t : t.map(ke));
}
function An(e) {
  return z(e = /* @__PURE__ */ M(e), "iterate", Wt), e;
}
function Xe(e, t) {
  return /* @__PURE__ */ Fe(e) ? yt(/* @__PURE__ */ tt(e) ? ke(t) : t) : ke(t);
}
const _i = {
  __proto__: null,
  [Symbol.iterator]() {
    return Bn(this, Symbol.iterator, (e) => Xe(this, e));
  },
  concat(...e) {
    return _t(this).concat(
      ...e.map((t) => C(t) ? _t(t) : t)
    );
  },
  entries() {
    return Bn(this, "entries", (e) => (e[1] = Xe(this, e[1]), e));
  },
  every(e, t) {
    return Ue(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ue(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Xe(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ue(
      this,
      "find",
      e,
      t,
      (n) => Xe(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ue(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ue(
      this,
      "findLast",
      e,
      t,
      (n) => Xe(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ue(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ue(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Kn(this, "includes", e);
  },
  indexOf(...e) {
    return Kn(this, "indexOf", e);
  },
  join(e) {
    return _t(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Kn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ue(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ct(this, "pop");
  },
  push(...e) {
    return Ct(this, "push", e);
  },
  reduce(e, ...t) {
    return ks(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ks(this, "reduceRight", e, t);
  },
  shift() {
    return Ct(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ue(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ct(this, "splice", e);
  },
  toReversed() {
    return _t(this).toReversed();
  },
  toSorted(e) {
    return _t(this).toSorted(e);
  },
  toSpliced(...e) {
    return _t(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ct(this, "unshift", e);
  },
  values() {
    return Bn(this, "values", (e) => Xe(this, e));
  }
};
function Bn(e, t, n) {
  const s = An(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ pe(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.done || (r.value = n(r.value)), r;
  }), o;
}
const gi = Array.prototype;
function Ue(e, t, n, s, o, r) {
  const i = An(e), l = i !== e && !/* @__PURE__ */ pe(e), f = i[t];
  if (f !== gi[t]) {
    const a = f.apply(e, r);
    return l ? ke(a) : a;
  }
  let d = n;
  i !== e && (l ? d = function(a, g) {
    return n.call(this, Xe(e, a), g, e);
  } : n.length > 2 && (d = function(a, g) {
    return n.call(this, a, g, e);
  }));
  const p = f.call(i, d, s);
  return l && o ? o(p) : p;
}
function ks(e, t, n, s) {
  const o = An(e);
  let r = n;
  return o !== e && (/* @__PURE__ */ pe(e) ? n.length > 3 && (r = function(i, l, f) {
    return n.call(this, i, l, f, e);
  }) : r = function(i, l, f) {
    return n.call(this, i, Xe(e, l), f, e);
  }), o[t](r, ...s);
}
function Kn(e, t, n) {
  const s = /* @__PURE__ */ M(e);
  z(s, "iterate", Wt);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ mn(n[0]) ? (n[0] = /* @__PURE__ */ M(n[0]), s[t](...n)) : o;
}
function Ct(e, t, n = []) {
  Se(), bs();
  const s = (/* @__PURE__ */ M(e))[t].apply(e, n);
  return Ns(), Ce(), s;
}
const mi = /* @__PURE__ */ qe("__proto__,__v_isRef,__isVue"), Bo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(st)
);
function vi(e) {
  st(e) || (e = String(e));
  const t = /* @__PURE__ */ M(this);
  return z(t, "has", e), t.hasOwnProperty(e);
}
class Ko {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return s === (o ? r ? zo : Yo : r ? Jo : Go).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = C(t);
    if (!o) {
      let f;
      if (i && (f = _i[n]))
        return f;
      if (n === "hasOwnProperty")
        return vi;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Z(t) ? t : s
    );
    if ((st(n) ? Bo.has(n) : mi(n)) || (o || z(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ Z(l)) {
      const f = i && ms(n) ? l : l.value;
      return o && K(f) ? /* @__PURE__ */ ns(f) : f;
    }
    return K(l) ? o ? /* @__PURE__ */ ns(l) : /* @__PURE__ */ Os(l) : l;
  }
}
class ko extends Ko {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    const i = C(t) && ms(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ Fe(r);
      if (!/* @__PURE__ */ pe(s) && !/* @__PURE__ */ Fe(s) && (r = /* @__PURE__ */ M(r), s = /* @__PURE__ */ M(s)), !i && /* @__PURE__ */ Z(r) && !/* @__PURE__ */ Z(s))
        return d ? (process.env.NODE_ENV !== "production" && Ve(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (r.value = s, !0);
    }
    const l = i ? Number(n) < t.length : R(t, n), f = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Z(t) ? t : o
    );
    return t === /* @__PURE__ */ M(o) && (l ? ft(s, r) && Re(t, "set", n, s, r) : Re(t, "add", n, s)), f;
  }
  deleteProperty(t, n) {
    const s = R(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && Re(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!st(n) || !Bo.has(n)) && z(t, "has", n), s;
  }
  ownKeys(t) {
    return z(
      t,
      "iterate",
      C(t) ? "length" : ut
    ), Reflect.ownKeys(t);
  }
}
class qo extends Ko {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Ve(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Ve(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Ei = /* @__PURE__ */ new ko(), bi = /* @__PURE__ */ new qo(), Ni = /* @__PURE__ */ new ko(!0), yi = /* @__PURE__ */ new qo(!0), ts = (e) => e, tn = (e) => Reflect.getPrototypeOf(e);
function Oi(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = /* @__PURE__ */ M(o), i = ct(r), l = e === "entries" || e === Symbol.iterator && i, f = e === "keys" && i, d = o[e](...s), p = n ? ts : t ? yt : ke;
    return !t && z(
      r,
      "iterate",
      f ? es : ut
    ), q(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: a, done: g } = d.next();
          return g ? { value: a, done: g } : {
            value: l ? [p(a[0]), p(a[1])] : p(a),
            done: g
          };
        }
      }
    );
  };
}
function nn(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ve(
        `${Tn(e)} operation ${n}failed: target is readonly.`,
        /* @__PURE__ */ M(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Di(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = /* @__PURE__ */ M(r), l = /* @__PURE__ */ M(o);
      e || (ft(o, l) && z(i, "get", o), z(i, "get", l));
      const { has: f } = tn(i), d = t ? ts : e ? yt : ke;
      if (f.call(i, o))
        return d(r.get(o));
      if (f.call(i, l))
        return d(r.get(l));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && z(/* @__PURE__ */ M(o), "iterate", ut), o.size;
    },
    has(o) {
      const r = this.__v_raw, i = /* @__PURE__ */ M(r), l = /* @__PURE__ */ M(o);
      return e || (ft(o, l) && z(i, "has", o), z(i, "has", l)), o === l ? r.has(o) : r.has(o) || r.has(l);
    },
    forEach(o, r) {
      const i = this, l = i.__v_raw, f = /* @__PURE__ */ M(l), d = t ? ts : e ? yt : ke;
      return !e && z(f, "iterate", ut), l.forEach((p, a) => o.call(r, d(p), d(a), i));
    }
  };
  return q(
    n,
    e ? {
      add: nn("add"),
      set: nn("set"),
      delete: nn("delete"),
      clear: nn("clear")
    } : {
      add(o) {
        !t && !/* @__PURE__ */ pe(o) && !/* @__PURE__ */ Fe(o) && (o = /* @__PURE__ */ M(o));
        const r = /* @__PURE__ */ M(this);
        return tn(r).has.call(r, o) || (r.add(o), Re(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !/* @__PURE__ */ pe(r) && !/* @__PURE__ */ Fe(r) && (r = /* @__PURE__ */ M(r));
        const i = /* @__PURE__ */ M(this), { has: l, get: f } = tn(i);
        let d = l.call(i, o);
        d ? process.env.NODE_ENV !== "production" && qs(i, l, o) : (o = /* @__PURE__ */ M(o), d = l.call(i, o));
        const p = f.call(i, o);
        return i.set(o, r), d ? ft(r, p) && Re(i, "set", o, r, p) : Re(i, "add", o, r), this;
      },
      delete(o) {
        const r = /* @__PURE__ */ M(this), { has: i, get: l } = tn(r);
        let f = i.call(r, o);
        f ? process.env.NODE_ENV !== "production" && qs(r, i, o) : (o = /* @__PURE__ */ M(o), f = i.call(r, o));
        const d = l ? l.call(r, o) : void 0, p = r.delete(o);
        return f && Re(r, "delete", o, void 0, d), p;
      },
      clear() {
        const o = /* @__PURE__ */ M(this), r = o.size !== 0, i = process.env.NODE_ENV !== "production" ? ct(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return r && Re(
          o,
          "clear",
          void 0,
          void 0,
          i
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = Oi(o, e, t);
  }), n;
}
function Pn(e, t) {
  const n = Di(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    R(n, o) && o in s ? n : s,
    o,
    r
  );
}
const xi = {
  get: /* @__PURE__ */ Pn(!1, !1)
}, wi = {
  get: /* @__PURE__ */ Pn(!1, !0)
}, Vi = {
  get: /* @__PURE__ */ Pn(!0, !1)
}, Si = {
  get: /* @__PURE__ */ Pn(!0, !0)
};
function qs(e, t, n) {
  const s = /* @__PURE__ */ M(n);
  if (s !== n && t.call(e, s)) {
    const o = gs(e);
    Ve(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Go = /* @__PURE__ */ new WeakMap(), Jo = /* @__PURE__ */ new WeakMap(), Yo = /* @__PURE__ */ new WeakMap(), zo = /* @__PURE__ */ new WeakMap();
function Ci(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ti(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ci(gs(e));
}
// @__NO_SIDE_EFFECTS__
function Os(e) {
  return /* @__PURE__ */ Fe(e) ? e : $n(
    e,
    !1,
    Ei,
    xi,
    Go
  );
}
// @__NO_SIDE_EFFECTS__
function Ai(e) {
  return $n(
    e,
    !1,
    Ni,
    wi,
    Jo
  );
}
// @__NO_SIDE_EFFECTS__
function ns(e) {
  return $n(
    e,
    !0,
    bi,
    Vi,
    Yo
  );
}
// @__NO_SIDE_EFFECTS__
function je(e) {
  return $n(
    e,
    !0,
    yi,
    Si,
    zo
  );
}
function $n(e, t, n, s, o) {
  if (!K(e))
    return process.env.NODE_ENV !== "production" && Ve(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Ti(e);
  if (r === 0)
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const l = new Proxy(
    e,
    r === 2 ? s : n
  );
  return o.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function tt(e) {
  return /* @__PURE__ */ Fe(e) ? /* @__PURE__ */ tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function mn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function M(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ M(t) : e;
}
function Pi(e) {
  return !R(e, "__v_skip") && Object.isExtensible(e) && gn(e, "__v_skip", !0), e;
}
const ke = (e) => K(e) ? /* @__PURE__ */ Os(e) : e, yt = (e) => K(e) ? /* @__PURE__ */ ns(e) : e;
// @__NO_SIDE_EFFECTS__
function Z(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Xo(e) {
  return /* @__PURE__ */ Z(e) ? e.value : e;
}
const $i = {
  get: (e, t, n) => t === "__v_raw" ? e : Xo(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ Z(o) && !/* @__PURE__ */ Z(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Zo(e) {
  return /* @__PURE__ */ tt(e) ? e : new Proxy(e, $i);
}
class Mi {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Uo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ut - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    U !== this)
      return Ro(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Ho(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && Ve("Write operation failed: computed value is readonly");
  }
}
// @__NO_SIDE_EFFECTS__
function Ii(e, t, n = !1) {
  let s, o;
  A(e) ? s = e : (s = e.get, o = e.set);
  const r = new Mi(s, o, n);
  return process.env.NODE_ENV, r;
}
const sn = {}, vn = /* @__PURE__ */ new WeakMap();
let lt;
function Ri(e, t = !1, n = lt) {
  if (n) {
    let s = vn.get(n);
    s || vn.set(n, s = []), s.push(e);
  } else process.env.NODE_ENV !== "production" && !t && Ve(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function ji(e, t, n = B) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: l, call: f } = n, d = (S) => {
    (n.onWarn || Ve)(
      "Invalid watch source: ",
      S,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (S) => o ? S : /* @__PURE__ */ pe(S) || o === !1 || o === 0 ? et(S, 1) : et(S);
  let a, g, x, P, V = !1, Q = !1;
  if (/* @__PURE__ */ Z(e) ? (g = () => e.value, V = /* @__PURE__ */ pe(e)) : /* @__PURE__ */ tt(e) ? (g = () => p(e), V = !0) : C(e) ? (Q = !0, V = e.some((S) => /* @__PURE__ */ tt(S) || /* @__PURE__ */ pe(S)), g = () => e.map((S) => {
    if (/* @__PURE__ */ Z(S))
      return S.value;
    if (/* @__PURE__ */ tt(S))
      return p(S);
    if (A(S))
      return f ? f(S, 2) : S();
    process.env.NODE_ENV !== "production" && d(S);
  })) : A(e) ? t ? g = f ? () => f(e, 2) : e : g = () => {
    if (x) {
      Se();
      try {
        x();
      } finally {
        Ce();
      }
    }
    const S = lt;
    lt = a;
    try {
      return f ? f(e, 3, [P]) : e(P);
    } finally {
      lt = S;
    }
  } : (g = X, process.env.NODE_ENV !== "production" && d(e)), t && o) {
    const S = g, ee = o === !0 ? 1 / 0 : o;
    g = () => et(S(), ee);
  }
  const G = pi(), L = () => {
    a.stop(), G && G.active && hs(G.effects, a);
  };
  if (r && t) {
    const S = t;
    t = (...ee) => {
      S(...ee), L();
    };
  }
  let H = Q ? new Array(e.length).fill(sn) : sn;
  const de = (S) => {
    if (!(!(a.flags & 1) || !a.dirty && !S))
      if (t) {
        const ee = a.run();
        if (o || V || (Q ? ee.some((Ee, te) => ft(Ee, H[te])) : ft(ee, H))) {
          x && x();
          const Ee = lt;
          lt = a;
          try {
            const te = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              H === sn ? void 0 : Q && H[0] === sn ? [] : H,
              P
            ];
            H = ee, f ? f(t, 3, te) : (
              // @ts-expect-error
              t(...te)
            );
          } finally {
            lt = Ee;
          }
        }
      } else
        a.run();
  };
  return l && l(de), a = new Mo(g), a.scheduler = i ? () => i(de, !1) : de, P = (S) => Ri(S, !1, a), x = a.onStop = () => {
    const S = vn.get(a);
    if (S) {
      if (f)
        f(S, 4);
      else
        for (const ee of S) ee();
      vn.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? s ? de(!0) : H = a.run() : i ? i(de.bind(null, !0), !0) : a.run(), L.pause = a.pause.bind(a), L.resume = a.resume.bind(a), L.stop = L, L;
}
function et(e, t = 1 / 0, n) {
  if (t <= 0 || !K(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Z(e))
    et(e.value, t, n);
  else if (C(e))
    for (let s = 0; s < e.length; s++)
      et(e[s], t, n);
  else if (Co(e) || ct(e))
    e.forEach((s) => {
      et(s, t, n);
    });
  else if (Sn(e)) {
    for (const s in e)
      et(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && et(e[s], t, n);
  }
  return e;
}
const at = [];
function on(e) {
  at.push(e);
}
function rn() {
  at.pop();
}
let kn = !1;
function y(e, ...t) {
  if (kn) return;
  kn = !0, Se();
  const n = at.length ? at[at.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Fi();
  if (s)
    Ot(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, l;
          return (l = (i = r.toString) == null ? void 0 : i.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: r }) => `at <${Zt(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...Hi(o)), console.warn(...r);
  }
  Ce(), kn = !1;
}
function Fi() {
  let e = at[at.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Hi(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Li(n));
  }), t;
}
function Li({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Zt(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Ui(e.props), r] : [o + r];
}
function Ui(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Qo(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Qo(e, t, n) {
  return J(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : /* @__PURE__ */ Z(t) ? (t = Qo(e, /* @__PURE__ */ M(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : A(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = /* @__PURE__ */ M(t), n ? t : [`${e}=`, t]);
}
const Ds = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Ot(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Jt(o, t, n);
  }
}
function He(e, t, n, s) {
  if (A(e)) {
    const o = Ot(e, t, n, s);
    return o && _s(o) && o.catch((r) => {
      Jt(r, t, n);
    }), o;
  }
  if (C(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(He(e[r], t, n, s));
    return o;
  } else process.env.NODE_ENV !== "production" && y(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Jt(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || B;
  if (t) {
    let l = t.parent;
    const f = t.proxy, d = process.env.NODE_ENV !== "production" ? Ds[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const p = l.ec;
      if (p) {
        for (let a = 0; a < p.length; a++)
          if (p[a](e, f, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Se(), Ot(r, null, 10, [
        e,
        f,
        d
      ]), Ce();
      return;
    }
  }
  Wi(e, n, o, s, i);
}
function Wi(e, t, n, s = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = Ds[t];
    if (n && on(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && rn(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const oe = [];
let Ie = -1;
const bt = [];
let Ze = null, vt = 0;
const er = /* @__PURE__ */ Promise.resolve();
let En = null;
const Bi = 100;
function tr(e) {
  const t = En || er;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ki(e) {
  let t = Ie + 1, n = oe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = oe[s], r = Bt(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Mn(e) {
  if (!(e.flags & 1)) {
    const t = Bt(e), n = oe[oe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Bt(n) ? oe.push(e) : oe.splice(Ki(t), 0, e), e.flags |= 1, nr();
  }
}
function nr() {
  En || (En = er.then(rr));
}
function sr(e) {
  C(e) ? bt.push(...e) : Ze && e.id === -1 ? Ze.splice(vt + 1, 0, e) : e.flags & 1 || (bt.push(e), e.flags |= 1), nr();
}
function Gs(e, t, n = Ie + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < oe.length; n++) {
    const s = oe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || process.env.NODE_ENV !== "production" && xs(t, s))
        continue;
      oe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function or(e) {
  if (bt.length) {
    const t = [...new Set(bt)].sort(
      (n, s) => Bt(n) - Bt(s)
    );
    if (bt.length = 0, Ze) {
      Ze.push(...t);
      return;
    }
    for (Ze = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), vt = 0; vt < Ze.length; vt++) {
      const n = Ze[vt];
      process.env.NODE_ENV !== "production" && xs(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Ze = null, vt = 0;
  }
}
const Bt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function rr(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => xs(e, n) : X;
  try {
    for (Ie = 0; Ie < oe.length; Ie++) {
      const n = oe[Ie];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Ot(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Ie < oe.length; Ie++) {
      const n = oe[Ie];
      n && (n.flags &= -2);
    }
    Ie = -1, oe.length = 0, or(e), En = null, (oe.length || bt.length) && rr(e);
  }
}
function xs(e, t) {
  const n = e.get(t) || 0;
  if (n > Bi) {
    const s = t.i, o = s && Ur(s.type);
    return Jt(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Oe = !1;
const ln = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Gt().__VUE_HMR_RUNTIME__ = {
  createRecord: qn(ir),
  rerender: qn(Gi),
  reload: qn(Ji)
});
const dt = /* @__PURE__ */ new Map();
function ki(e) {
  const t = e.type.__hmrId;
  let n = dt.get(t);
  n || (ir(t, e.type), n = dt.get(t)), n.instances.add(e);
}
function qi(e) {
  dt.get(e.type.__hmrId).instances.delete(e);
}
function ir(e, t) {
  return dt.has(e) ? !1 : (dt.set(e, {
    initialDef: bn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function bn(e) {
  return Wr(e) ? e.__vccOpts : e;
}
function Gi(e, t) {
  const n = dt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, bn(s.type).render = t), s.renderCache = [], Oe = !0, s.job.flags & 8 || s.update(), Oe = !1;
  }));
}
function Ji(e, t) {
  const n = dt.get(e);
  if (!n) return;
  t = bn(t), Js(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = bn(r.type);
    let l = ln.get(i);
    l || (i !== n.initialDef && Js(i, t), ln.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? Mn(() => {
      r.job.flags & 8 || (Oe = !0, r.parent.update(), Oe = !1, l.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  sr(() => {
    ln.clear();
  });
}
function Js(e, t) {
  q(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function qn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let De, $t = [], ss = !1;
function Yt(e, ...t) {
  De ? De.emit(e, ...t) : ss || $t.push({ event: e, args: t });
}
function ws(e, t) {
  var n, s;
  De = e, De ? (De.enabled = !0, $t.forEach(({ event: o, args: r }) => De.emit(o, ...r)), $t = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    ws(r, t);
  }), setTimeout(() => {
    De || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ss = !0, $t = []);
  }, 3e3)) : (ss = !0, $t = []);
}
function Yi(e, t) {
  Yt("app:init", e, t, {
    Fragment: _e,
    Text: zt,
    Comment: we,
    Static: un
  });
}
function zi(e) {
  Yt("app:unmount", e);
}
const Xi = /* @__PURE__ */ Vs(
  "component:added"
  /* COMPONENT_ADDED */
), lr = /* @__PURE__ */ Vs(
  "component:updated"
  /* COMPONENT_UPDATED */
), Zi = /* @__PURE__ */ Vs(
  "component:removed"
  /* COMPONENT_REMOVED */
), Qi = (e) => {
  De && typeof De.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !De.cleanupBuffer(e) && Zi(e);
};
// @__NO_SIDE_EFFECTS__
function Vs(e) {
  return (t) => {
    Yt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const el = /* @__PURE__ */ cr(
  "perf:start"
  /* PERFORMANCE_START */
), tl = /* @__PURE__ */ cr(
  "perf:end"
  /* PERFORMANCE_END */
);
function cr(e) {
  return (t, n, s) => {
    Yt(e, t.appContext.app, t.uid, t, n, s);
  };
}
function nl(e, t, n) {
  Yt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let me = null, fr = null;
function Nn(e) {
  const t = me;
  return me = e, fr = e && e.type.__scopeId || null, t;
}
function sl(e, t = me, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && co(-1);
    const r = Nn(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Nn(r), s._d && co(1);
    }
    return process.env.NODE_ENV !== "production" && lr(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function ur(e) {
  Yr(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function ot(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    r && (l.oldValue = r[i].value);
    let f = l.dir[s];
    f && (Se(), He(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ce());
  }
}
function ol(e, t) {
  if (process.env.NODE_ENV !== "production" && (!Y || Y.isMounted) && y("provide() can only be used inside setup()."), Y) {
    let n = Y.provides;
    const s = Y.parent && Y.parent.provides;
    s === n && (n = Y.provides = Object.create(s)), n[e] = t;
  }
}
function cn(e, t, n = !1) {
  const s = Fr();
  if (s || Nt) {
    let o = Nt ? Nt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && A(t) ? t.call(s && s.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const rl = /* @__PURE__ */ Symbol.for("v-scx"), il = () => {
  {
    const e = cn(rl);
    return e || process.env.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Gn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !A(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ar(e, t, n);
}
function ar(e, t, n = B) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (s !== void 0 && y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && y(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = q({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = y);
  const f = t && s || !t && r !== "post";
  let d;
  if (kt) {
    if (r === "sync") {
      const x = il();
      d = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!f) {
      const x = () => {
      };
      return x.stop = X, x.resume = X, x.pause = X, x;
    }
  }
  const p = Y;
  l.call = (x, P, V) => He(x, p, P, V);
  let a = !1;
  r === "post" ? l.scheduler = (x) => {
    he(x, p && p.suspense);
  } : r !== "sync" && (a = !0, l.scheduler = (x, P) => {
    P ? x() : Mn(x);
  }), l.augmentJob = (x) => {
    t && (x.flags |= 4), a && (x.flags |= 2, p && (x.id = p.uid, x.i = p));
  };
  const g = ji(e, t, l);
  return kt && (d ? d.push(g) : f && g()), g;
}
function ll(e, t, n) {
  const s = this.proxy, o = J(e) ? e.includes(".") ? pr(s, e) : () => s[e] : e.bind(s, s);
  let r;
  A(t) ? r = t : (r = t.handler, n = t);
  const i = Xt(this), l = ar(o, r.bind(s), n);
  return i(), l;
}
function pr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const cl = /* @__PURE__ */ Symbol("_vte"), fl = (e) => e.__isTeleport, ul = /* @__PURE__ */ Symbol("_leaveCb");
function Ss(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ss(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function dr(e, t) {
  return A(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    q({ name: e.name }, t, { setup: e })
  ) : e;
}
function hr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Ys = /* @__PURE__ */ new WeakSet(), yn = /* @__PURE__ */ new WeakMap();
function Ft(e, t, n, s, o = !1) {
  if (C(e)) {
    e.forEach(
      (V, Q) => Ft(
        V,
        t && (C(t) ? t[Q] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (Ht(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Ft(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? Is(s.component) : s.el, i = o ? null : r, { i: l, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, p = l.refs === B ? l.refs = {} : l.refs, a = l.setupState, g = /* @__PURE__ */ M(a), x = a === B ? So : (V) => process.env.NODE_ENV !== "production" && (R(g, V) && !/* @__PURE__ */ Z(g[V]) && y(
    `Template ref "${V}" used on a non-ref value. It will not work in the production build.`
  ), Ys.has(g[V])) ? !1 : R(g, V), P = (V) => process.env.NODE_ENV === "production" || !Ys.has(V);
  if (d != null && d !== f) {
    if (zs(t), J(d))
      p[d] = null, x(d) && (a[d] = null);
    else if (/* @__PURE__ */ Z(d)) {
      P(d) && (d.value = null);
      const V = t;
      V.k && (p[V.k] = null);
    }
  }
  if (A(f))
    Ot(f, l, 12, [i, p]);
  else {
    const V = J(f), Q = /* @__PURE__ */ Z(f);
    if (V || Q) {
      const G = () => {
        if (e.f) {
          const L = V ? x(f) ? a[f] : p[f] : P(f) || !e.k ? f.value : p[e.k];
          if (o)
            C(L) && hs(L, r);
          else if (C(L))
            L.includes(r) || L.push(r);
          else if (V)
            p[f] = [r], x(f) && (a[f] = p[f]);
          else {
            const H = [r];
            P(f) && (f.value = H), e.k && (p[e.k] = H);
          }
        } else V ? (p[f] = i, x(f) && (a[f] = i)) : Q ? (P(f) && (f.value = i), e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
      };
      if (i) {
        const L = () => {
          G(), yn.delete(e);
        };
        L.id = -1, yn.set(e, L), he(L, n);
      } else
        zs(e), G();
    } else process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
  }
}
function zs(e) {
  const t = yn.get(e);
  t && (t.flags |= 8, yn.delete(e));
}
Gt().requestIdleCallback;
Gt().cancelIdleCallback;
const Ht = (e) => !!e.type.__asyncLoader, Cs = (e) => e.type.__isKeepAlive;
function al(e, t) {
  _r(e, "a", t);
}
function pl(e, t) {
  _r(e, "da", t);
}
function _r(e, t, n = Y) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (In(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Cs(o.parent.vnode) && dl(s, t, n, o), o = o.parent;
  }
}
function dl(e, t, n, s) {
  const o = In(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  gr(() => {
    hs(s[t], o);
  }, n);
}
function In(e, t, n = Y, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      Se();
      const l = Xt(n), f = He(t, n, e, i);
      return l(), Ce(), f;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const o = it(Ds[e].replace(/ hook$/, ""));
    y(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ge = (e) => (t, n = Y) => {
  (!kt || e === "sp") && In(e, (...s) => t(...s), n);
}, hl = Ge("bm"), _l = Ge("m"), gl = Ge(
  "bu"
), ml = Ge("u"), vl = Ge(
  "bum"
), gr = Ge("um"), El = Ge(
  "sp"
), bl = Ge("rtg"), Nl = Ge("rtc");
function yl(e, t = Y) {
  In("ec", e, t);
}
const Ol = /* @__PURE__ */ Symbol.for("v-ndc");
function Dl(e, t, n, s) {
  let o;
  const r = n, i = C(e);
  if (i || J(e)) {
    const l = i && /* @__PURE__ */ tt(e);
    let f = !1, d = !1;
    l && (f = !/* @__PURE__ */ pe(e), d = /* @__PURE__ */ Fe(e), e = An(e)), o = new Array(e.length);
    for (let p = 0, a = e.length; p < a; p++)
      o[p] = t(
        f ? d ? yt(ke(e[p])) : ke(e[p]) : e[p],
        p,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && y(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, r);
  } else if (K(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, f) => t(l, f, void 0, r)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let f = 0, d = l.length; f < d; f++) {
        const p = l[f];
        o[f] = t(e[p], p, f, r);
      }
    }
  else
    o = [];
  return o;
}
const os = (e) => e ? Hr(e) ? Is(e) : os(e.parent) : null, pt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ q(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ je(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ je(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ je(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ je(e.refs) : e.refs,
    $parent: (e) => os(e.parent),
    $root: (e) => os(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Er(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Mn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = tr.bind(e.proxy)),
    $watch: (e) => ll.bind(e)
  })
), Ts = (e) => e === "_" || e === "$", Jn = (e, t) => e !== B && !e.__isScriptSetup && R(e, t), mr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: l, appContext: f } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (t[0] !== "$") {
      const g = i[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Jn(s, t))
          return i[t] = 1, s[t];
        if (o !== B && R(o, t))
          return i[t] = 2, o[t];
        if (R(r, t))
          return i[t] = 3, r[t];
        if (n !== B && R(n, t))
          return i[t] = 4, n[t];
        rs && (i[t] = 0);
      }
    }
    const d = pt[t];
    let p, a;
    if (d)
      return t === "$attrs" ? (z(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && Dn()) : process.env.NODE_ENV !== "production" && t === "$slots" && z(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (p = l.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== B && R(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      a = f.config.globalProperties, R(a, t)
    )
      return a[t];
    process.env.NODE_ENV !== "production" && me && (!J(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== B && Ts(t[0]) && R(o, t) ? y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === me && y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return Jn(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && R(o, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== B && R(s, t) ? (s[t] = n, !0) : R(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: r, type: i }
  }, l) {
    let f;
    return !!(n[l] || e !== B && l[0] !== "$" && R(e, l) || Jn(t, l) || R(r, l) || R(s, l) || R(pt, l) || R(o.config.globalProperties, l) || (f = i.__cssModules) && f[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : R(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (mr.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function xl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(pt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => pt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: X
    });
  }), t;
}
function wl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: X
    });
  });
}
function Vl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(/* @__PURE__ */ M(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (Ts(s[0])) {
        y(
          `setup() return property ${JSON.stringify(
            s
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s],
        set: X
      });
    }
  });
}
function Xs(e) {
  return C(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Sl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let rs = !0;
function Cl(e) {
  const t = Er(e), n = e.proxy, s = e.ctx;
  rs = !1, t.beforeCreate && Zs(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: r,
    methods: i,
    watch: l,
    provide: f,
    inject: d,
    // lifecycle
    created: p,
    beforeMount: a,
    mounted: g,
    beforeUpdate: x,
    updated: P,
    activated: V,
    deactivated: Q,
    beforeDestroy: G,
    beforeUnmount: L,
    destroyed: H,
    unmounted: de,
    render: S,
    renderTracked: ee,
    renderTriggered: Ee,
    errorCaptured: te,
    serverPrefetch: re,
    // public API
    expose: Le,
    inheritAttrs: Je,
    // assets
    components: Ne,
    directives: Qt,
    filters: js
  } = t, Ye = process.env.NODE_ENV !== "production" ? Sl() : null;
  if (process.env.NODE_ENV !== "production") {
    const [j] = e.propsOptions;
    if (j)
      for (const I in j)
        Ye("Props", I);
  }
  if (d && Tl(d, s, Ye), i)
    for (const j in i) {
      const I = i[j];
      A(I) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(s, j, {
        value: I.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[j] = I.bind(n), process.env.NODE_ENV !== "production" && Ye("Methods", j)) : process.env.NODE_ENV !== "production" && y(
        `Method "${j}" has type "${typeof I}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !A(o) && y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const j = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && _s(j) && y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !K(j))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = /* @__PURE__ */ Os(j), process.env.NODE_ENV !== "production")
      for (const I in j)
        Ye("Data", I), Ts(I[0]) || Object.defineProperty(s, I, {
          configurable: !0,
          enumerable: !0,
          get: () => j[I],
          set: X
        });
  }
  if (rs = !0, r)
    for (const j in r) {
      const I = r[j], Te = A(I) ? I.bind(n, n) : A(I.get) ? I.get.bind(n, n) : X;
      process.env.NODE_ENV !== "production" && Te === X && y(`Computed property "${j}" has no getter.`);
      const Fn = !A(I) && A(I.set) ? I.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${j}" is readonly.`
        );
      } : X, Dt = Dc({
        get: Te,
        set: Fn
      });
      Object.defineProperty(s, j, {
        enumerable: !0,
        configurable: !0,
        get: () => Dt.value,
        set: (ht) => Dt.value = ht
      }), process.env.NODE_ENV !== "production" && Ye("Computed", j);
    }
  if (l)
    for (const j in l)
      vr(l[j], s, n, j);
  if (f) {
    const j = A(f) ? f.call(n) : f;
    Reflect.ownKeys(j).forEach((I) => {
      ol(I, j[I]);
    });
  }
  p && Zs(p, e, "c");
  function ie(j, I) {
    C(I) ? I.forEach((Te) => j(Te.bind(n))) : I && j(I.bind(n));
  }
  if (ie(hl, a), ie(_l, g), ie(gl, x), ie(ml, P), ie(al, V), ie(pl, Q), ie(yl, te), ie(Nl, ee), ie(bl, Ee), ie(vl, L), ie(gr, de), ie(El, re), C(Le))
    if (Le.length) {
      const j = e.exposed || (e.exposed = {});
      Le.forEach((I) => {
        Object.defineProperty(j, I, {
          get: () => n[I],
          set: (Te) => n[I] = Te,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === X && (e.render = S), Je != null && (e.inheritAttrs = Je), Ne && (e.components = Ne), Qt && (e.directives = Qt), re && hr(e);
}
function Tl(e, t, n = X) {
  C(e) && (e = is(e));
  for (const s in e) {
    const o = e[s];
    let r;
    K(o) ? "default" in o ? r = cn(
      o.from || s,
      o.default,
      !0
    ) : r = cn(o.from || s) : r = cn(o), /* @__PURE__ */ Z(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, process.env.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Zs(e, t, n) {
  He(
    C(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function vr(e, t, n, s) {
  let o = s.includes(".") ? pr(n, s) : () => n[s];
  if (J(e)) {
    const r = t[e];
    A(r) ? Gn(o, r) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, r);
  } else if (A(e))
    Gn(o, e.bind(n));
  else if (K(e))
    if (C(e))
      e.forEach((r) => vr(r, t, n, s));
    else {
      const r = A(e.handler) ? e.handler.bind(n) : t[e.handler];
      A(r) ? Gn(o, r, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${s}"`, e);
}
function Er(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let f;
  return l ? f = l : !o.length && !n && !s ? f = t : (f = {}, o.length && o.forEach(
    (d) => On(f, d, i, !0)
  ), On(f, t, i)), K(t) && r.set(t, f), f;
}
function On(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && On(e, r, n, !0), o && o.forEach(
    (i) => On(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      process.env.NODE_ENV !== "production" && y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Al[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Al = {
  data: Qs,
  props: eo,
  emits: eo,
  // objects
  methods: Mt,
  computed: Mt,
  // lifecycle
  beforeCreate: se,
  created: se,
  beforeMount: se,
  mounted: se,
  beforeUpdate: se,
  updated: se,
  beforeDestroy: se,
  beforeUnmount: se,
  destroyed: se,
  unmounted: se,
  activated: se,
  deactivated: se,
  errorCaptured: se,
  serverPrefetch: se,
  // assets
  components: Mt,
  directives: Mt,
  // watch
  watch: $l,
  // provide / inject
  provide: Qs,
  inject: Pl
};
function Qs(e, t) {
  return t ? e ? function() {
    return q(
      A(e) ? e.call(this, this) : e,
      A(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Pl(e, t) {
  return Mt(is(e), is(t));
}
function is(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Mt(e, t) {
  return e ? q(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function eo(e, t) {
  return e ? C(e) && C(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : q(
    /* @__PURE__ */ Object.create(null),
    Xs(e),
    Xs(t ?? {})
  ) : t;
}
function $l(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = q(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = se(e[s], t[s]);
  return n;
}
function br() {
  return {
    app: null,
    config: {
      isNativeTag: So,
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
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ml = 0;
function Il(e, t) {
  return function(s, o = null) {
    A(s) || (s = q({}, s)), o != null && !K(o) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), o = null);
    const r = br(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const d = r.app = {
      _uid: Ml++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: po,
      get config() {
        return r.config;
      },
      set config(p) {
        process.env.NODE_ENV !== "production" && y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...a) {
        return i.has(p) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : p && A(p.install) ? (i.add(p), p.install(d, ...a)) : A(p) ? (i.add(p), p(d, ...a)) : process.env.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), d;
      },
      mixin(p) {
        return r.mixins.includes(p) ? process.env.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : r.mixins.push(p), d;
      },
      component(p, a) {
        return process.env.NODE_ENV !== "production" && as(p, r.config), a ? (process.env.NODE_ENV !== "production" && r.components[p] && y(`Component "${p}" has already been registered in target app.`), r.components[p] = a, d) : r.components[p];
      },
      directive(p, a) {
        return process.env.NODE_ENV !== "production" && ur(p), a ? (process.env.NODE_ENV !== "production" && r.directives[p] && y(`Directive "${p}" has already been registered in target app.`), r.directives[p] = a, d) : r.directives[p];
      },
      mount(p, a, g) {
        if (f)
          process.env.NODE_ENV !== "production" && y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && p.__vue_app__ && y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const x = d._ceVNode || Ke(s, o);
          return x.appContext = r, g === !0 ? g = "svg" : g === !1 && (g = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            const P = nt(x);
            P.el = null, e(P, p, g);
          }), e(x, p, g), f = !0, d._container = p, p.__vue_app__ = d, process.env.NODE_ENV !== "production" && (d._instance = x.component, Yi(d, po)), Is(x.component);
        }
      },
      onUnmount(p) {
        process.env.NODE_ENV !== "production" && typeof p != "function" && y(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), l.push(p);
      },
      unmount() {
        f ? (He(
          l,
          d._instance,
          16
        ), e(null, d._container), process.env.NODE_ENV !== "production" && (d._instance = null, zi(d)), delete d._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(p, a) {
        return process.env.NODE_ENV !== "production" && p in r.provides && (R(r.provides, p) ? y(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ) : y(
          `App already provides property with key "${String(p)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[p] = a, d;
      },
      runWithContext(p) {
        const a = Nt;
        Nt = d;
        try {
          return p();
        } finally {
          Nt = a;
        }
      }
    };
    return d;
  };
}
let Nt = null;
const Rl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ae(t)}Modifiers`] || e[`${ge(t)}Modifiers`];
function jl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || B;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [a]
    } = e;
    if (p)
      if (!(t in p))
        (!a || !(it(ae(t)) in a)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${it(ae(t))}" prop.`
        );
      else {
        const g = p[t];
        A(g) && (g(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && Rl(s, t.slice(7));
  if (i && (i.trim && (o = n.map((p) => J(p) ? p.trim() : p)), i.number && (o = n.map(Zr))), process.env.NODE_ENV !== "production" && nl(e, t, o), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && s[it(p)] && y(
      `Event "${p}" is emitted in component ${Zt(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ge(
        t
      )}" instead of "${t}".`
    );
  }
  let l, f = s[l = it(t)] || // also try camelCase event handler (#2249)
  s[l = it(ae(t))];
  !f && r && (f = s[l = it(ge(t))]), f && He(
    f,
    e,
    6,
    o
  );
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, He(
      d,
      e,
      6,
      o
    );
  }
}
const Fl = /* @__PURE__ */ new WeakMap();
function Nr(e, t, n = !1) {
  const s = n ? Fl : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, l = !1;
  if (!A(e)) {
    const f = (d) => {
      const p = Nr(d, t, !0);
      p && (l = !0, q(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !r && !l ? (K(e) && s.set(e, null), null) : (C(r) ? r.forEach((f) => i[f] = null) : q(i, r), K(e) && s.set(e, i), i);
}
function Rn(e, t) {
  return !e || !qt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), R(e, t[0].toLowerCase() + t.slice(1)) || R(e, ge(t)) || R(e, t));
}
let ls = !1;
function Dn() {
  ls = !0;
}
function to(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [r],
    slots: i,
    attrs: l,
    emit: f,
    render: d,
    renderCache: p,
    props: a,
    data: g,
    setupState: x,
    ctx: P,
    inheritAttrs: V
  } = e, Q = Nn(e);
  let G, L;
  process.env.NODE_ENV !== "production" && (ls = !1);
  try {
    if (n.shapeFlag & 4) {
      const S = o || s, ee = process.env.NODE_ENV !== "production" && x.__isScriptSetup ? new Proxy(S, {
        get(Ee, te, re) {
          return y(
            `Property '${String(
              te
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Ee, te, re);
        }
      }) : S;
      G = ye(
        d.call(
          ee,
          S,
          p,
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ je(a) : a,
          x,
          g,
          P
        )
      ), L = l;
    } else {
      const S = t;
      process.env.NODE_ENV !== "production" && l === a && Dn(), G = ye(
        S.length > 1 ? S(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ je(a) : a,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Dn(), /* @__PURE__ */ je(l);
            },
            slots: i,
            emit: f
          } : { attrs: l, slots: i, emit: f }
        ) : S(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ je(a) : a,
          null
        )
      ), L = t.props ? l : Hl(l);
    }
  } catch (S) {
    Lt.length = 0, Jt(S, e, 1), G = Ke(we);
  }
  let H = G, de;
  if (process.env.NODE_ENV !== "production" && G.patchFlag > 0 && G.patchFlag & 2048 && ([H, de] = yr(G)), L && V !== !1) {
    const S = Object.keys(L), { shapeFlag: ee } = H;
    if (S.length) {
      if (ee & 7)
        r && S.some(_n) && (L = Ll(
          L,
          r
        )), H = nt(H, L, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !ls && H.type !== we) {
        const Ee = Object.keys(l), te = [], re = [];
        for (let Le = 0, Je = Ee.length; Le < Je; Le++) {
          const Ne = Ee[Le];
          qt(Ne) ? _n(Ne) || te.push(Ne[2].toLowerCase() + Ne.slice(3)) : re.push(Ne);
        }
        re.length && y(
          `Extraneous non-props attributes (${re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), te.length && y(
          `Extraneous non-emits event listeners (${te.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !no(H) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), H = nt(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !no(H) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Ss(H, n.transition)), process.env.NODE_ENV !== "production" && de ? de(H) : G = H, Nn(Q), G;
}
const yr = (e) => {
  const t = e.children, n = e.dynamicChildren, s = As(t, !1);
  if (s) {
    if (process.env.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return yr(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (l) => {
    t[o] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [ye(s), i];
};
function As(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (jn(o)) {
      if (o.type !== we || o.children === "v-if") {
        if (n)
          return;
        if (n = o, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return As(n.children);
      }
    } else
      return;
  }
  return n;
}
const Hl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || qt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ll = (e, t) => {
  const n = {};
  for (const s in e)
    (!_n(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, no = (e) => e.shapeFlag & 7 || e.type === we;
function Ul(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: l, patchFlag: f } = t, d = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (o || l) && Oe || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return s ? so(s, i, d) : !!i;
    if (f & 8) {
      const p = t.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        const g = p[a];
        if (i[g] !== s[g] && !Rn(d, g))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? so(s, i, d) : !0 : !!i;
  return !1;
}
function so(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t[r] !== e[r] && !Rn(n, r))
      return !0;
  }
  return !1;
}
function Wl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Or = {}, Dr = () => Object.create(Or), xr = (e) => Object.getPrototypeOf(e) === Or;
function Bl(e, t, n, s = !1) {
  const o = {}, r = Dr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), wr(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  process.env.NODE_ENV !== "production" && Sr(t || {}, o, e), n ? e.props = s ? o : /* @__PURE__ */ Ai(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function Kl(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function kl(e, t, n, s) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = /* @__PURE__ */ M(o), [f] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Kl(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        let g = p[a];
        if (Rn(e.emitsOptions, g))
          continue;
        const x = t[g];
        if (f)
          if (R(r, g))
            x !== r[g] && (r[g] = x, d = !0);
          else {
            const P = ae(g);
            o[P] = cs(
              f,
              l,
              P,
              x,
              e,
              !1
            );
          }
        else
          x !== r[g] && (r[g] = x, d = !0);
      }
    }
  } else {
    wr(e, t, o, r) && (d = !0);
    let p;
    for (const a in l)
      (!t || // for camelCase
      !R(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = ge(a)) === a || !R(t, p))) && (f ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[p] !== void 0) && (o[a] = cs(
        f,
        l,
        a,
        void 0,
        e,
        !0
      )) : delete o[a]);
    if (r !== l)
      for (const a in r)
        (!t || !R(t, a)) && (delete r[a], d = !0);
  }
  d && Re(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Sr(t || {}, o, e);
}
function wr(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let f in t) {
      if (It(f))
        continue;
      const d = t[f];
      let p;
      o && R(o, p = ae(f)) ? !r || !r.includes(p) ? n[p] = d : (l || (l = {}))[p] = d : Rn(e.emitsOptions, f) || (!(f in s) || d !== s[f]) && (s[f] = d, i = !0);
    }
  if (r) {
    const f = /* @__PURE__ */ M(n), d = l || B;
    for (let p = 0; p < r.length; p++) {
      const a = r[p];
      n[a] = cs(
        o,
        f,
        a,
        d[a],
        e,
        !R(d, a)
      );
    }
  }
  return i;
}
function cs(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const l = R(i, "default");
    if (l && s === void 0) {
      const f = i.default;
      if (i.type !== Function && !i.skipFactory && A(f)) {
        const { propsDefaults: d } = o;
        if (n in d)
          s = d[n];
        else {
          const p = Xt(o);
          s = d[n] = f.call(
            null,
            t
          ), p();
        }
      } else
        s = f;
      o.ce && o.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !l ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === ge(n)) && (s = !0));
  }
  return s;
}
const ql = /* @__PURE__ */ new WeakMap();
function Vr(e, t, n = !1) {
  const s = n ? ql : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, l = [];
  let f = !1;
  if (!A(e)) {
    const p = (a) => {
      f = !0;
      const [g, x] = Vr(a, t, !0);
      q(i, g), x && l.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !f)
    return K(e) && s.set(e, Et), Et;
  if (C(r))
    for (let p = 0; p < r.length; p++) {
      process.env.NODE_ENV !== "production" && !J(r[p]) && y("props must be strings when using array syntax.", r[p]);
      const a = ae(r[p]);
      oo(a) && (i[a] = B);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !K(r) && y("invalid props options", r);
    for (const p in r) {
      const a = ae(p);
      if (oo(a)) {
        const g = r[p], x = i[a] = C(g) || A(g) ? { type: g } : q({}, g), P = x.type;
        let V = !1, Q = !0;
        if (C(P))
          for (let G = 0; G < P.length; ++G) {
            const L = P[G], H = A(L) && L.name;
            if (H === "Boolean") {
              V = !0;
              break;
            } else H === "String" && (Q = !1);
          }
        else
          V = A(P) && P.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = V, x[
          1
          /* shouldCastTrue */
        ] = Q, (V || R(x, "default")) && l.push(a);
      }
    }
  }
  const d = [i, l];
  return K(e) && s.set(e, d), d;
}
function oo(e) {
  return e[0] !== "$" && !It(e) ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Gl(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Sr(e, t, n) {
  const s = /* @__PURE__ */ M(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => ae(i));
  for (const i in o) {
    let l = o[i];
    l != null && Jl(
      i,
      s[i],
      l,
      process.env.NODE_ENV !== "production" ? /* @__PURE__ */ je(s) : s,
      !r.includes(i)
    );
  }
}
function Jl(e, t, n, s, o) {
  const { type: r, required: i, validator: l, skipCheck: f } = n;
  if (i && o) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !f) {
      let d = !1;
      const p = C(r) ? r : [r], a = [];
      for (let g = 0; g < p.length && !d; g++) {
        const { valid: x, expectedType: P } = zl(t, p[g]);
        a.push(P || ""), d = x;
      }
      if (!d) {
        y(Xl(e, t, a));
        return;
      }
    }
    l && !l(t, s) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Yl = /* @__PURE__ */ qe(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function zl(e, t) {
  let n;
  const s = Gl(t);
  if (s === "null")
    n = e === null;
  else if (Yl(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = K(e) : s === "Array" ? n = C(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Xl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Tn).join(" | ")}`;
  const o = n[0], r = gs(t), i = ro(t, o), l = ro(t, r);
  return n.length === 1 && io(o) && !Zl(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, io(r) && (s += `with value ${l}.`), s;
}
function ro(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function io(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Zl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ps = (e) => e === "_" || e === "_ctx" || e === "$stable", $s = (e) => C(e) ? e.map(ye) : [ye(e)], Ql = (e, t, n) => {
  if (t._n)
    return t;
  const s = sl((...o) => (process.env.NODE_ENV !== "production" && Y && !(n === null && me) && !(n && n.root !== Y.root) && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), $s(t(...o))), n);
  return s._c = !1, s;
}, Cr = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Ps(o)) continue;
    const r = e[o];
    if (A(r))
      t[o] = Ql(o, r, s);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = $s(r);
      t[o] = () => i;
    }
  }
}, Tr = (e, t) => {
  process.env.NODE_ENV !== "production" && !Cs(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = $s(t);
  e.slots.default = () => n;
}, fs = (e, t, n) => {
  for (const s in t)
    (n || !Ps(s)) && (e[s] = t[s]);
}, ec = (e, t, n) => {
  const s = e.slots = Dr();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (fs(s, t, n), n && gn(s, "_", o, !0)) : Cr(t, s);
  } else t && Tr(e, t);
}, tc = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = B;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Oe ? (fs(o, t, n), Re(e, "set", "$slots")) : n && l === 1 ? r = !1 : fs(o, t, n) : (r = !t.$stable, Cr(t, o)), i = t;
  } else t && (Tr(e, t), i = { default: 1 });
  if (r)
    for (const l in o)
      !Ps(l) && i[l] == null && delete o[l];
};
let Tt, Be;
function gt(e, t) {
  e.appContext.config.performance && xn() && Be.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && el(e, t, xn() ? Be.now() : Date.now());
}
function mt(e, t) {
  if (e.appContext.config.performance && xn()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end", o = `<${Zt(e, e.type)}> ${t}`;
    Be.mark(s), Be.measure(o, n, s), Be.clearMeasures(o), Be.clearMarks(n), Be.clearMarks(s);
  }
  process.env.NODE_ENV !== "production" && tl(e, t, xn() ? Be.now() : Date.now());
}
function xn() {
  return Tt !== void 0 || (typeof window < "u" && window.performance ? (Tt = !0, Be = window.performance) : Tt = !1), Tt;
}
function nc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const he = lc;
function sc(e) {
  return oc(e);
}
function oc(e, t) {
  nc();
  const n = Gt();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && ws(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: f,
    setText: d,
    setElementText: p,
    parentNode: a,
    nextSibling: g,
    setScopeId: x = X,
    insertStaticContent: P
  } = e, V = (c, u, h, E = null, m = null, _ = null, O = void 0, b = null, N = process.env.NODE_ENV !== "production" && Oe ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !At(c, u) && (E = en(c), ze(c, m, _, !0), c = null), u.patchFlag === -2 && (N = !1, u.dynamicChildren = null);
    const { type: v, ref: T, shapeFlag: D } = u;
    switch (v) {
      case zt:
        Q(c, u, h, E);
        break;
      case we:
        G(c, u, h, E);
        break;
      case un:
        c == null ? L(u, h, E, O) : process.env.NODE_ENV !== "production" && H(c, u, h, O);
        break;
      case _e:
        Qt(
          c,
          u,
          h,
          E,
          m,
          _,
          O,
          b,
          N
        );
        break;
      default:
        D & 1 ? ee(
          c,
          u,
          h,
          E,
          m,
          _,
          O,
          b,
          N
        ) : D & 6 ? js(
          c,
          u,
          h,
          E,
          m,
          _,
          O,
          b,
          N
        ) : D & 64 || D & 128 ? v.process(
          c,
          u,
          h,
          E,
          m,
          _,
          O,
          b,
          N,
          wt
        ) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", v, `(${typeof v})`);
    }
    T != null && m ? Ft(T, c && c.ref, _, u || c, !u) : T == null && c && c.ref != null && Ft(c.ref, null, _, c, !0);
  }, Q = (c, u, h, E) => {
    if (c == null)
      s(
        u.el = l(u.children),
        h,
        E
      );
    else {
      const m = u.el = c.el;
      if (u.children !== c.children)
        if (process.env.NODE_ENV !== "production" && Oe && u.patchFlag === -1 && "__elIndex" in c) {
          const _ = h.childNodes, O = l(u.children), b = _[u.__elIndex = c.__elIndex];
          s(O, h, b), o(b);
        } else
          d(m, u.children);
    }
  }, G = (c, u, h, E) => {
    c == null ? s(
      u.el = f(u.children || ""),
      h,
      E
    ) : u.el = c.el;
  }, L = (c, u, h, E) => {
    [c.el, c.anchor] = P(
      c.children,
      u,
      h,
      E,
      c.el,
      c.anchor
    );
  }, H = (c, u, h, E) => {
    if (u.children !== c.children) {
      const m = g(c.anchor);
      S(c), [u.el, u.anchor] = P(
        u.children,
        h,
        m,
        E
      );
    } else
      u.el = c.el, u.anchor = c.anchor;
  }, de = ({ el: c, anchor: u }, h, E) => {
    let m;
    for (; c && c !== u; )
      m = g(c), s(c, h, E), c = m;
    s(u, h, E);
  }, S = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; )
      h = g(c), o(c), c = h;
    o(u);
  }, ee = (c, u, h, E, m, _, O, b, N) => {
    if (u.type === "svg" ? O = "svg" : u.type === "math" && (O = "mathml"), c == null)
      Ee(
        u,
        h,
        E,
        m,
        _,
        O,
        b,
        N
      );
    else {
      const v = c.el && c.el._isVueCE ? c.el : null;
      try {
        v && v._beginPatch(), Le(
          c,
          u,
          m,
          _,
          O,
          b,
          N
        );
      } finally {
        v && v._endPatch();
      }
    }
  }, Ee = (c, u, h, E, m, _, O, b) => {
    let N, v;
    const { props: T, shapeFlag: D, transition: w, dirs: $ } = c;
    if (N = c.el = i(
      c.type,
      _,
      T && T.is,
      T
    ), D & 8 ? p(N, c.children) : D & 16 && re(
      c.children,
      N,
      null,
      E,
      m,
      Yn(c, _),
      O,
      b
    ), $ && ot(c, null, E, "created"), te(N, c, c.scopeId, O, E), T) {
      for (const k in T)
        k !== "value" && !It(k) && r(N, k, null, T[k], _, E);
      "value" in T && r(N, "value", null, T.value, _), (v = T.onVnodeBeforeMount) && Me(v, E, c);
    }
    process.env.NODE_ENV !== "production" && (gn(N, "__vnode", c, !0), gn(N, "__vueParentComponent", E, !0)), $ && ot(c, null, E, "beforeMount");
    const F = rc(m, w);
    F && w.beforeEnter(N), s(N, u, h), ((v = T && T.onVnodeMounted) || F || $) && he(() => {
      v && Me(v, E, c), F && w.enter(N), $ && ot(c, null, E, "mounted");
    }, m);
  }, te = (c, u, h, E, m) => {
    if (h && x(c, h), E)
      for (let _ = 0; _ < E.length; _++)
        x(c, E[_]);
    if (m) {
      let _ = m.subTree;
      if (process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && (_ = As(_.children) || _), u === _ || $r(_.type) && (_.ssContent === u || _.ssFallback === u)) {
        const O = m.vnode;
        te(
          c,
          O,
          O.scopeId,
          O.slotScopeIds,
          m.parent
        );
      }
    }
  }, re = (c, u, h, E, m, _, O, b, N = 0) => {
    for (let v = N; v < c.length; v++) {
      const T = c[v] = b ? Qe(c[v]) : ye(c[v]);
      V(
        null,
        T,
        u,
        h,
        E,
        m,
        _,
        O,
        b
      );
    }
  }, Le = (c, u, h, E, m, _, O) => {
    const b = u.el = c.el;
    process.env.NODE_ENV !== "production" && (b.__vnode = u);
    let { patchFlag: N, dynamicChildren: v, dirs: T } = u;
    N |= c.patchFlag & 16;
    const D = c.props || B, w = u.props || B;
    let $;
    if (h && rt(h, !1), ($ = w.onVnodeBeforeUpdate) && Me($, h, u, c), T && ot(u, c, h, "beforeUpdate"), h && rt(h, !0), process.env.NODE_ENV !== "production" && Oe && (N = 0, O = !1, v = null), (D.innerHTML && w.innerHTML == null || D.textContent && w.textContent == null) && p(b, ""), v ? (Je(
      c.dynamicChildren,
      v,
      b,
      h,
      E,
      Yn(u, m),
      _
    ), process.env.NODE_ENV !== "production" && fn(c, u)) : O || Te(
      c,
      u,
      b,
      null,
      h,
      E,
      Yn(u, m),
      _,
      !1
    ), N > 0) {
      if (N & 16)
        Ne(b, D, w, h, m);
      else if (N & 2 && D.class !== w.class && r(b, "class", null, w.class, m), N & 4 && r(b, "style", D.style, w.style, m), N & 8) {
        const F = u.dynamicProps;
        for (let k = 0; k < F.length; k++) {
          const W = F[k], le = D[W], ce = w[W];
          (ce !== le || W === "value") && r(b, W, le, ce, m, h);
        }
      }
      N & 1 && c.children !== u.children && p(b, u.children);
    } else !O && v == null && Ne(b, D, w, h, m);
    (($ = w.onVnodeUpdated) || T) && he(() => {
      $ && Me($, h, u, c), T && ot(u, c, h, "updated");
    }, E);
  }, Je = (c, u, h, E, m, _, O) => {
    for (let b = 0; b < u.length; b++) {
      const N = c[b], v = u[b], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === _e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !At(N, v) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? a(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      V(
        N,
        v,
        T,
        null,
        E,
        m,
        _,
        O,
        !0
      );
    }
  }, Ne = (c, u, h, E, m) => {
    if (u !== h) {
      if (u !== B)
        for (const _ in u)
          !It(_) && !(_ in h) && r(
            c,
            _,
            u[_],
            null,
            m,
            E
          );
      for (const _ in h) {
        if (It(_)) continue;
        const O = h[_], b = u[_];
        O !== b && _ !== "value" && r(c, _, b, O, m, E);
      }
      "value" in h && r(c, "value", u.value, h.value, m);
    }
  }, Qt = (c, u, h, E, m, _, O, b, N) => {
    const v = u.el = c ? c.el : l(""), T = u.anchor = c ? c.anchor : l("");
    let { patchFlag: D, dynamicChildren: w, slotScopeIds: $ } = u;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Oe || D & 2048) && (D = 0, N = !1, w = null), $ && (b = b ? b.concat($) : $), c == null ? (s(v, h, E), s(T, h, E), re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      T,
      m,
      _,
      O,
      b,
      N
    )) : D > 0 && D & 64 && w && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === w.length ? (Je(
      c.dynamicChildren,
      w,
      h,
      m,
      _,
      O,
      b
    ), process.env.NODE_ENV !== "production" ? fn(c, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || m && u === m.subTree) && fn(
        c,
        u,
        !0
        /* shallow */
      )
    )) : Te(
      c,
      u,
      h,
      T,
      m,
      _,
      O,
      b,
      N
    );
  }, js = (c, u, h, E, m, _, O, b, N) => {
    u.slotScopeIds = b, c == null ? u.shapeFlag & 512 ? m.ctx.activate(
      u,
      h,
      E,
      O,
      N
    ) : Ye(
      u,
      h,
      E,
      m,
      _,
      O,
      N
    ) : ie(c, u, N);
  }, Ye = (c, u, h, E, m, _, O) => {
    const b = c.component = _c(
      c,
      E,
      m
    );
    if (process.env.NODE_ENV !== "production" && b.type.__hmrId && ki(b), process.env.NODE_ENV !== "production" && (on(c), gt(b, "mount")), Cs(c) && (b.ctx.renderer = wt), process.env.NODE_ENV !== "production" && gt(b, "init"), mc(b, !1, O), process.env.NODE_ENV !== "production" && mt(b, "init"), process.env.NODE_ENV !== "production" && Oe && (c.el = null), b.asyncDep) {
      if (m && m.registerDep(b, j, O), !c.el) {
        const N = b.subTree = Ke(we);
        G(null, N, u, h), c.placeholder = N.el;
      }
    } else
      j(
        b,
        c,
        u,
        h,
        m,
        _,
        O
      );
    process.env.NODE_ENV !== "production" && (rn(), mt(b, "mount"));
  }, ie = (c, u, h) => {
    const E = u.component = c.component;
    if (Ul(c, u, h))
      if (E.asyncDep && !E.asyncResolved) {
        process.env.NODE_ENV !== "production" && on(u), I(E, u, h), process.env.NODE_ENV !== "production" && rn();
        return;
      } else
        E.next = u, E.update();
    else
      u.el = c.el, E.vnode = u;
  }, j = (c, u, h, E, m, _, O) => {
    const b = () => {
      if (c.isMounted) {
        let { next: D, bu: w, u: $, parent: F, vnode: k } = c;
        {
          const Pe = Ar(c);
          if (Pe) {
            D && (D.el = k.el, I(c, D, O)), Pe.asyncDep.then(() => {
              c.isUnmounted || b();
            });
            return;
          }
        }
        let W = D, le;
        process.env.NODE_ENV !== "production" && on(D || c.vnode), rt(c, !1), D ? (D.el = k.el, I(c, D, O)) : D = k, w && St(w), (le = D.props && D.props.onVnodeBeforeUpdate) && Me(le, F, D, k), rt(c, !0), process.env.NODE_ENV !== "production" && gt(c, "render");
        const ce = to(c);
        process.env.NODE_ENV !== "production" && mt(c, "render");
        const Ae = c.subTree;
        c.subTree = ce, process.env.NODE_ENV !== "production" && gt(c, "patch"), V(
          Ae,
          ce,
          // parent may have changed if it's in a teleport
          a(Ae.el),
          // anchor may have changed if it's in a fragment
          en(Ae),
          c,
          m,
          _
        ), process.env.NODE_ENV !== "production" && mt(c, "patch"), D.el = ce.el, W === null && Wl(c, ce.el), $ && he($, m), (le = D.props && D.props.onVnodeUpdated) && he(
          () => Me(le, F, D, k),
          m
        ), process.env.NODE_ENV !== "production" && lr(c), process.env.NODE_ENV !== "production" && rn();
      } else {
        let D;
        const { el: w, props: $ } = u, { bm: F, m: k, parent: W, root: le, type: ce } = c, Ae = Ht(u);
        rt(c, !1), F && St(F), !Ae && (D = $ && $.onVnodeBeforeMount) && Me(D, W, u), rt(c, !0);
        {
          le.ce && // @ts-expect-error _def is private
          le.ce._def.shadowRoot !== !1 && le.ce._injectChildStyle(ce), process.env.NODE_ENV !== "production" && gt(c, "render");
          const Pe = c.subTree = to(c);
          process.env.NODE_ENV !== "production" && mt(c, "render"), process.env.NODE_ENV !== "production" && gt(c, "patch"), V(
            null,
            Pe,
            h,
            E,
            c,
            m,
            _
          ), process.env.NODE_ENV !== "production" && mt(c, "patch"), u.el = Pe.el;
        }
        if (k && he(k, m), !Ae && (D = $ && $.onVnodeMounted)) {
          const Pe = u;
          he(
            () => Me(D, W, Pe),
            m
          );
        }
        (u.shapeFlag & 256 || W && Ht(W.vnode) && W.vnode.shapeFlag & 256) && c.a && he(c.a, m), c.isMounted = !0, process.env.NODE_ENV !== "production" && Xi(c), u = h = E = null;
      }
    };
    c.scope.on();
    const N = c.effect = new Mo(b);
    c.scope.off();
    const v = c.update = N.run.bind(N), T = c.job = N.runIfDirty.bind(N);
    T.i = c, T.id = c.uid, N.scheduler = () => Mn(T), rt(c, !0), process.env.NODE_ENV !== "production" && (N.onTrack = c.rtc ? (D) => St(c.rtc, D) : void 0, N.onTrigger = c.rtg ? (D) => St(c.rtg, D) : void 0), v();
  }, I = (c, u, h) => {
    u.component = c;
    const E = c.vnode.props;
    c.vnode = u, c.next = null, kl(c, u.props, E, h), tc(c, u.children, h), Se(), Gs(c), Ce();
  }, Te = (c, u, h, E, m, _, O, b, N = !1) => {
    const v = c && c.children, T = c ? c.shapeFlag : 0, D = u.children, { patchFlag: w, shapeFlag: $ } = u;
    if (w > 0) {
      if (w & 128) {
        Dt(
          v,
          D,
          h,
          E,
          m,
          _,
          O,
          b,
          N
        );
        return;
      } else if (w & 256) {
        Fn(
          v,
          D,
          h,
          E,
          m,
          _,
          O,
          b,
          N
        );
        return;
      }
    }
    $ & 8 ? (T & 16 && xt(v, m, _), D !== v && p(h, D)) : T & 16 ? $ & 16 ? Dt(
      v,
      D,
      h,
      E,
      m,
      _,
      O,
      b,
      N
    ) : xt(v, m, _, !0) : (T & 8 && p(h, ""), $ & 16 && re(
      D,
      h,
      E,
      m,
      _,
      O,
      b,
      N
    ));
  }, Fn = (c, u, h, E, m, _, O, b, N) => {
    c = c || Et, u = u || Et;
    const v = c.length, T = u.length, D = Math.min(v, T);
    let w;
    for (w = 0; w < D; w++) {
      const $ = u[w] = N ? Qe(u[w]) : ye(u[w]);
      V(
        c[w],
        $,
        h,
        null,
        m,
        _,
        O,
        b,
        N
      );
    }
    v > T ? xt(
      c,
      m,
      _,
      !0,
      !1,
      D
    ) : re(
      u,
      h,
      E,
      m,
      _,
      O,
      b,
      N,
      D
    );
  }, Dt = (c, u, h, E, m, _, O, b, N) => {
    let v = 0;
    const T = u.length;
    let D = c.length - 1, w = T - 1;
    for (; v <= D && v <= w; ) {
      const $ = c[v], F = u[v] = N ? Qe(u[v]) : ye(u[v]);
      if (At($, F))
        V(
          $,
          F,
          h,
          null,
          m,
          _,
          O,
          b,
          N
        );
      else
        break;
      v++;
    }
    for (; v <= D && v <= w; ) {
      const $ = c[D], F = u[w] = N ? Qe(u[w]) : ye(u[w]);
      if (At($, F))
        V(
          $,
          F,
          h,
          null,
          m,
          _,
          O,
          b,
          N
        );
      else
        break;
      D--, w--;
    }
    if (v > D) {
      if (v <= w) {
        const $ = w + 1, F = $ < T ? u[$].el : E;
        for (; v <= w; )
          V(
            null,
            u[v] = N ? Qe(u[v]) : ye(u[v]),
            h,
            F,
            m,
            _,
            O,
            b,
            N
          ), v++;
      }
    } else if (v > w)
      for (; v <= D; )
        ze(c[v], m, _, !0), v++;
    else {
      const $ = v, F = v, k = /* @__PURE__ */ new Map();
      for (v = F; v <= w; v++) {
        const ne = u[v] = N ? Qe(u[v]) : ye(u[v]);
        ne.key != null && (process.env.NODE_ENV !== "production" && k.has(ne.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(ne.key),
          "Make sure keys are unique."
        ), k.set(ne.key, v));
      }
      let W, le = 0;
      const ce = w - F + 1;
      let Ae = !1, Pe = 0;
      const Vt = new Array(ce);
      for (v = 0; v < ce; v++) Vt[v] = 0;
      for (v = $; v <= D; v++) {
        const ne = c[v];
        if (le >= ce) {
          ze(ne, m, _, !0);
          continue;
        }
        let $e;
        if (ne.key != null)
          $e = k.get(ne.key);
        else
          for (W = F; W <= w; W++)
            if (Vt[W - F] === 0 && At(ne, u[W])) {
              $e = W;
              break;
            }
        $e === void 0 ? ze(ne, m, _, !0) : (Vt[$e - F] = v + 1, $e >= Pe ? Pe = $e : Ae = !0, V(
          ne,
          u[$e],
          h,
          null,
          m,
          _,
          O,
          b,
          N
        ), le++);
      }
      const Hs = Ae ? ic(Vt) : Et;
      for (W = Hs.length - 1, v = ce - 1; v >= 0; v--) {
        const ne = F + v, $e = u[ne], Ls = u[ne + 1], Us = ne + 1 < T ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ls.el || Pr(Ls)
        ) : E;
        Vt[v] === 0 ? V(
          null,
          $e,
          h,
          Us,
          m,
          _,
          O,
          b,
          N
        ) : Ae && (W < 0 || v !== Hs[W] ? ht($e, h, Us, 2) : W--);
      }
    }
  }, ht = (c, u, h, E, m = null) => {
    const { el: _, type: O, transition: b, children: N, shapeFlag: v } = c;
    if (v & 6) {
      ht(c.component.subTree, u, h, E);
      return;
    }
    if (v & 128) {
      c.suspense.move(u, h, E);
      return;
    }
    if (v & 64) {
      O.move(c, u, h, wt);
      return;
    }
    if (O === _e) {
      s(_, u, h);
      for (let D = 0; D < N.length; D++)
        ht(N[D], u, h, E);
      s(c.anchor, u, h);
      return;
    }
    if (O === un) {
      de(c, u, h);
      return;
    }
    if (E !== 2 && v & 1 && b)
      if (E === 0)
        b.beforeEnter(_), s(_, u, h), he(() => b.enter(_), m);
      else {
        const { leave: D, delayLeave: w, afterLeave: $ } = b, F = () => {
          c.ctx.isUnmounted ? o(_) : s(_, u, h);
        }, k = () => {
          _._isLeaving && _[ul](
            !0
            /* cancelled */
          ), D(_, () => {
            F(), $ && $();
          });
        };
        w ? w(_, F, k) : k();
      }
    else
      s(_, u, h);
  }, ze = (c, u, h, E = !1, m = !1) => {
    const {
      type: _,
      props: O,
      ref: b,
      children: N,
      dynamicChildren: v,
      shapeFlag: T,
      patchFlag: D,
      dirs: w,
      cacheIndex: $
    } = c;
    if (D === -2 && (m = !1), b != null && (Se(), Ft(b, null, h, c, !0), Ce()), $ != null && (u.renderCache[$] = void 0), T & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const F = T & 1 && w, k = !Ht(c);
    let W;
    if (k && (W = O && O.onVnodeBeforeUnmount) && Me(W, u, c), T & 6)
      Gr(c.component, h, E);
    else {
      if (T & 128) {
        c.suspense.unmount(h, E);
        return;
      }
      F && ot(c, null, u, "beforeUnmount"), T & 64 ? c.type.remove(
        c,
        u,
        h,
        wt,
        E
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== _e || D > 0 && D & 64) ? xt(
        v,
        u,
        h,
        !1,
        !0
      ) : (_ === _e && D & 384 || !m && T & 16) && xt(N, u, h), E && Hn(c);
    }
    (k && (W = O && O.onVnodeUnmounted) || F) && he(() => {
      W && Me(W, u, c), F && ot(c, null, u, "unmounted");
    }, h);
  }, Hn = (c) => {
    const { type: u, el: h, anchor: E, transition: m } = c;
    if (u === _e) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && m && !m.persisted ? c.children.forEach((O) => {
        O.type === we ? o(O.el) : Hn(O);
      }) : qr(h, E);
      return;
    }
    if (u === un) {
      S(c);
      return;
    }
    const _ = () => {
      o(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (c.shapeFlag & 1 && m && !m.persisted) {
      const { leave: O, delayLeave: b } = m, N = () => O(h, _);
      b ? b(c.el, _, N) : N();
    } else
      _();
  }, qr = (c, u) => {
    let h;
    for (; c !== u; )
      h = g(c), o(c), c = h;
    o(u);
  }, Gr = (c, u, h) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && qi(c);
    const { bum: E, scope: m, job: _, subTree: O, um: b, m: N, a: v } = c;
    lo(N), lo(v), E && St(E), m.stop(), _ && (_.flags |= 8, ze(O, c, u, h)), b && he(b, u), he(() => {
      c.isUnmounted = !0;
    }, u), process.env.NODE_ENV !== "production" && Qi(c);
  }, xt = (c, u, h, E = !1, m = !1, _ = 0) => {
    for (let O = _; O < c.length; O++)
      ze(c[O], u, h, E, m);
  }, en = (c) => {
    if (c.shapeFlag & 6)
      return en(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = g(c.anchor || c.el), h = u && u[cl];
    return h ? g(h) : u;
  };
  let Ln = !1;
  const Fs = (c, u, h) => {
    let E;
    c == null ? u._vnode && (ze(u._vnode, null, null, !0), E = u._vnode.component) : V(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = c, Ln || (Ln = !0, Gs(E), or(), Ln = !1);
  }, wt = {
    p: V,
    um: ze,
    m: ht,
    r: Hn,
    mt: Ye,
    mc: re,
    pc: Te,
    pbc: Je,
    n: en,
    o: e
  };
  return {
    render: Fs,
    hydrate: void 0,
    createApp: Il(Fs)
  };
}
function Yn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function rt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function rc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function fn(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (C(s) && C(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[r] = Qe(o[r]), l.el = i.el), !n && l.patchFlag !== -2 && fn(i, l)), l.type === zt && (l.patchFlag !== -1 ? l.el = i.el : l.__elIndex = r + // take fragment start anchor into account
      (e.type === _e ? 1 : 0)), l.type === we && !l.el && (l.el = i.el), process.env.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function ic(e) {
  const t = e.slice(), n = [0];
  let s, o, r, i, l;
  const f = e.length;
  for (s = 0; s < f; s++) {
    const d = e[s];
    if (d !== 0) {
      if (o = n[n.length - 1], e[o] < d) {
        t[s] = o, n.push(s);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < d ? r = l + 1 : i = l;
      d < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function Ar(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ar(t);
}
function lo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Pr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Pr(t.subTree) : null;
}
const $r = (e) => e.__isSuspense;
function lc(e, t) {
  t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : sr(e);
}
const _e = /* @__PURE__ */ Symbol.for("v-fgt"), zt = /* @__PURE__ */ Symbol.for("v-txt"), we = /* @__PURE__ */ Symbol.for("v-cmt"), un = /* @__PURE__ */ Symbol.for("v-stc"), Lt = [];
let ve = null;
function an(e = !1) {
  Lt.push(ve = e ? null : []);
}
function cc() {
  Lt.pop(), ve = Lt[Lt.length - 1] || null;
}
let Kt = 1;
function co(e, t = !1) {
  Kt += e, e < 0 && ve && t && (ve.hasOnce = !0);
}
function fc(e) {
  return e.dynamicChildren = Kt > 0 ? ve || Et : null, cc(), Kt > 0 && ve && ve.push(e), e;
}
function pn(e, t, n, s, o, r) {
  return fc(
    fe(
      e,
      t,
      n,
      s,
      o,
      r,
      !0
    )
  );
}
function jn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function At(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = ln.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const uc = (...e) => Ir(
  ...e
), Mr = ({ key: e }) => e ?? null, dn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? J(e) || /* @__PURE__ */ Z(e) || A(e) ? { i: me, r: e, k: t, f: !!n } : e : null);
function fe(e, t = null, n = null, s = 0, o = null, r = e === _e ? 0 : 1, i = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Mr(t),
    ref: t && dn(t),
    scopeId: fr,
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
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: me
  };
  return l ? (Ms(f, n), r & 128 && e.normalize(f)) : n && (f.shapeFlag |= J(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && y("VNode created with invalid key (NaN). VNode type:", f.type), Kt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ve && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ve.push(f), f;
}
const Ke = process.env.NODE_ENV !== "production" ? uc : Ir;
function Ir(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === Ol) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = we), jn(e)) {
    const l = nt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ms(l, n), Kt > 0 && !r && ve && (l.shapeFlag & 6 ? ve[ve.indexOf(e)] = l : ve.push(l)), l.patchFlag = -2, l;
  }
  if (Wr(e) && (e = e.__vccOpts), t) {
    t = ac(t);
    let { class: l, style: f } = t;
    l && !J(l) && (t.class = Es(l)), K(f) && (/* @__PURE__ */ mn(f) && !C(f) && (f = q({}, f)), t.style = vs(f));
  }
  const i = J(e) ? 1 : $r(e) ? 128 : fl(e) ? 64 : K(e) ? 4 : A(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && /* @__PURE__ */ mn(e) && (e = /* @__PURE__ */ M(e), y(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), fe(
    e,
    t,
    n,
    s,
    o,
    i,
    r,
    !0
  );
}
function ac(e) {
  return e ? /* @__PURE__ */ mn(e) || xr(e) ? q({}, e) : e : null;
}
function nt(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: l, transition: f } = e, d = t ? pc(o || {}, t) : o, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Mr(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? C(r) ? r.concat(dn(t)) : [r, dn(t)] : dn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && C(l) ? l.map(Rr) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== _e ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && nt(e.ssContent),
    ssFallback: e.ssFallback && nt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && s && Ss(
    p,
    f.clone(p)
  ), p;
}
function Rr(e) {
  const t = nt(e);
  return C(e.children) && (t.children = e.children.map(Rr)), t;
}
function jr(e = " ", t = 0) {
  return Ke(zt, null, e, t);
}
function ye(e) {
  return e == null || typeof e == "boolean" ? Ke(we) : C(e) ? Ke(
    _e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : jn(e) ? Qe(e) : Ke(zt, null, String(e));
}
function Qe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : nt(e);
}
function Ms(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (C(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Ms(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !xr(t) ? t._ctx = me : o === 3 && me && (me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else A(t) ? (t = { default: t, _ctx: me }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [jr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function pc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = Es([t.class, s.class]));
      else if (o === "style")
        t.style = vs([t.style, s.style]);
      else if (qt(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(C(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function Me(e, t, n, s = null) {
  He(e, t, 7, [
    n,
    s
  ]);
}
const dc = br();
let hc = 0;
function _c(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || dc, r = {
    uid: hc++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new ai(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Vr(s, o),
    emitsOptions: Nr(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: B,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: B,
    data: B,
    props: B,
    attrs: B,
    slots: B,
    refs: B,
    setupState: B,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
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
  };
  return process.env.NODE_ENV !== "production" ? r.ctx = xl(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = jl.bind(null, r), e.ce && e.ce(r), r;
}
let Y = null;
const Fr = () => Y || me;
let wn, us;
{
  const e = Gt(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  wn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Y = n
  ), us = t(
    "__VUE_SSR_SETTERS__",
    (n) => kt = n
  );
}
const Xt = (e) => {
  const t = Y;
  return wn(e), e.scope.on(), () => {
    e.scope.off(), wn(t);
  };
}, fo = () => {
  Y && Y.scope.off(), wn(null);
}, gc = /* @__PURE__ */ qe("slot,component");
function as(e, { isNativeTag: t }) {
  (gc(e) || t(e)) && y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Hr(e) {
  return e.vnode.shapeFlag & 4;
}
let kt = !1;
function mc(e, t = !1, n = !1) {
  t && us(t);
  const { props: s, children: o } = e.vnode, r = Hr(e);
  Bl(e, s, r, t), ec(e, o, n || t);
  const i = r ? vc(e, t) : void 0;
  return t && us(!1), i;
}
function vc(e, t) {
  const n = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (n.name && as(n.name, e.appContext.config), n.components) {
      const o = Object.keys(n.components);
      for (let r = 0; r < o.length; r++)
        as(o[r], e.appContext.config);
    }
    if (n.directives) {
      const o = Object.keys(n.directives);
      for (let r = 0; r < o.length; r++)
        ur(o[r]);
    }
    n.compilerOptions && Ec() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, mr), process.env.NODE_ENV !== "production" && wl(e);
  const { setup: s } = n;
  if (s) {
    Se();
    const o = e.setupContext = s.length > 1 ? Nc(e) : null, r = Xt(e), i = Ot(
      s,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? /* @__PURE__ */ je(e.props) : e.props,
        o
      ]
    ), l = _s(i);
    if (Ce(), r(), (l || e.sp) && !Ht(e) && hr(e), l) {
      if (i.then(fo, fo), t)
        return i.then((f) => {
          uo(e, f, t);
        }).catch((f) => {
          Jt(f, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const f = Zt(e, n);
        y(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      uo(e, i, t);
  } else
    Lr(e, t);
}
function uo(e, t, n) {
  A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) ? (process.env.NODE_ENV !== "production" && jn(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Zo(t), process.env.NODE_ENV !== "production" && Vl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Lr(e, n);
}
const Ec = () => !0;
function Lr(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || X);
  {
    const o = Xt(e);
    Se();
    try {
      Cl(e);
    } finally {
      Ce(), o();
    }
  }
  process.env.NODE_ENV !== "production" && !s.render && e.render === X && !t && (s.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : y("Component is missing template or render function: ", s));
}
const ao = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return Dn(), z(e, "get", ""), e[t];
  },
  set() {
    return y("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return y("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return z(e, "get", ""), e[t];
  }
};
function bc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return z(e, "get", "$slots"), t[n];
    }
  });
}
function Nc(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (C(n) ? s = "array" : /* @__PURE__ */ Z(n) && (s = "ref")), s !== "object" && y(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, ao));
      },
      get slots() {
        return s || (s = bc(e));
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, ao),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Is(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Zo(Pi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in pt)
        return pt[n](e);
    },
    has(t, n) {
      return n in t || n in pt;
    }
  })) : e.proxy;
}
const yc = /(?:^|[-_])\w/g, Oc = (e) => e.replace(yc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ur(e, t = !0) {
  return A(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Zt(e, t, n = !1) {
  let s = Ur(t);
  if (!s && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && e) {
    const o = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    s = o(e.components) || e.parent && o(
      e.parent.type.components
    ) || o(e.appContext.components);
  }
  return s ? Oc(s) : n ? "App" : "Anonymous";
}
function Wr(e) {
  return A(e) && "__vccOpts" in e;
}
const Dc = (e, t) => {
  const n = /* @__PURE__ */ Ii(e, t, kt);
  if (process.env.NODE_ENV !== "production") {
    const s = Fr();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function xc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(a) {
      if (!K(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (/* @__PURE__ */ Z(a)) {
        Se();
        const g = a.value;
        return Ce(), [
          "div",
          {},
          ["span", e, p(a)],
          "<",
          l(g),
          ">"
        ];
      } else {
        if (/* @__PURE__ */ tt(a))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ pe(a) ? "ShallowReactive" : "Reactive"],
            "<",
            l(a),
            `>${/* @__PURE__ */ Fe(a) ? " (readonly)" : ""}`
          ];
        if (/* @__PURE__ */ Fe(a))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ pe(a) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(a),
            ">"
          ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...r(a.$)
        ];
    }
  };
  function r(a) {
    const g = [];
    a.type.props && a.props && g.push(i("props", /* @__PURE__ */ M(a.props))), a.setupState !== B && g.push(i("setup", a.setupState)), a.data !== B && g.push(i("data", /* @__PURE__ */ M(a.data)));
    const x = f(a, "computed");
    x && g.push(i("computed", x));
    const P = f(a, "inject");
    return P && g.push(i("injected", P)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), g;
  }
  function i(a, g) {
    return g = q({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((x) => [
          "div",
          {},
          ["span", s, x + ": "],
          l(g[x], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, g = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", s, a] : K(a) ? ["object", { object: g ? /* @__PURE__ */ M(a) : a }] : ["span", n, String(a)];
  }
  function f(a, g) {
    const x = a.type;
    if (A(x))
      return;
    const P = {};
    for (const V in a.ctx)
      d(x, V, g) && (P[V] = a.ctx[V]);
    return P;
  }
  function d(a, g, x) {
    const P = a[x];
    if (C(P) && P.includes(g) || K(P) && g in P || a.extends && d(a.extends, g, x) || a.mixins && a.mixins.some((V) => d(V, g, x)))
      return !0;
  }
  function p(a) {
    return /* @__PURE__ */ pe(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const po = "3.5.27", be = process.env.NODE_ENV !== "production" ? y : X;
process.env.NODE_ENV;
process.env.NODE_ENV;
let ps;
const ho = typeof window < "u" && window.trustedTypes;
if (ho)
  try {
    ps = /* @__PURE__ */ ho.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && be(`Error creating trusted types policy: ${e}`);
  }
const Br = ps ? (e) => ps.createHTML(e) : (e) => e, wc = "http://www.w3.org/2000/svg", Vc = "http://www.w3.org/1998/Math/MathML", We = typeof document < "u" ? document : null, _o = We && /* @__PURE__ */ We.createElement("template"), Sc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? We.createElementNS(wc, e) : t === "mathml" ? We.createElementNS(Vc, e) : n ? We.createElement(e, { is: n }) : We.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => We.createTextNode(e),
  createComment: (e) => We.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => We.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === r || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === r || !(o = o.nextSibling)); )
        ;
    else {
      _o.innerHTML = Br(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = _o.content;
      if (s === "svg" || s === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Cc = /* @__PURE__ */ Symbol("_vtc");
function Tc(e, t, n) {
  const s = e[Cc];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const go = /* @__PURE__ */ Symbol("_vod"), Ac = /* @__PURE__ */ Symbol("_vsh"), Pc = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), $c = /(?:^|;)\s*display\s*:/;
function Mc(e, t, n) {
  const s = e.style, o = J(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (J(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && hn(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && hn(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), hn(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[Pc];
      i && (n += ";" + i), s.cssText = n, r = $c.test(n);
    }
  } else t && e.removeAttribute("style");
  go in e && (e[go] = r ? s.display : "", e[Ac] && (s.display = "none"));
}
const Ic = /[^\\];\s*$/, mo = /\s*!important$/;
function hn(e, t, n) {
  if (C(n))
    n.forEach((s) => hn(e, t, s));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Ic.test(n) && be(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Rc(e, t);
    mo.test(n) ? e.setProperty(
      ge(s),
      n.replace(mo, ""),
      "important"
    ) : e[s] = n;
  }
}
const vo = ["Webkit", "Moz", "ms"], zn = {};
function Rc(e, t) {
  const n = zn[t];
  if (n)
    return n;
  let s = ae(t);
  if (s !== "filter" && s in e)
    return zn[t] = s;
  s = Tn(s);
  for (let o = 0; o < vo.length; o++) {
    const r = vo[o] + s;
    if (r in e)
      return zn[t] = r;
  }
  return t;
}
const Eo = "http://www.w3.org/1999/xlink";
function bo(e, t, n, s, o, r = ui(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Eo, t.slice(6, t.length)) : e.setAttributeNS(Eo, t, n) : n == null || r && !Ao(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : st(n) ? String(n) : n
  );
}
function No(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Br(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Ao(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !i && be(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(o || t);
}
function jc(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Fc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const yo = /* @__PURE__ */ Symbol("_vei");
function Hc(e, t, n, s, o = null) {
  const r = e[yo] || (e[yo] = {}), i = r[t];
  if (s && i)
    i.value = process.env.NODE_ENV !== "production" ? Do(s, t) : s;
  else {
    const [l, f] = Lc(t);
    if (s) {
      const d = r[t] = Bc(
        process.env.NODE_ENV !== "production" ? Do(s, t) : s,
        o
      );
      jc(e, l, d, f);
    } else i && (Fc(e, l, i, f), r[t] = void 0);
  }
}
const Oo = /(?:Once|Passive|Capture)$/;
function Lc(e) {
  let t;
  if (Oo.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Oo); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ge(e.slice(2)), t];
}
let Xn = 0;
const Uc = /* @__PURE__ */ Promise.resolve(), Wc = () => Xn || (Uc.then(() => Xn = 0), Xn = Date.now());
function Bc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    He(
      Kc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Wc(), n;
}
function Do(e, t) {
  return A(e) || C(e) ? e : (be(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), X);
}
function Kc(e, t) {
  if (C(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const xo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, kc = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? Tc(e, s, i) : t === "style" ? Mc(e, n, s) : qt(t) ? _n(t) || Hc(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qc(e, t, s, i)) ? (No(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && bo(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !J(s)) ? No(e, ae(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), bo(e, t, s, i));
};
function qc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && xo(t) && A(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return xo(t) && J(n) ? !1 : t in e;
}
const wo = {};
// @__NO_SIDE_EFFECTS__
function Gc(e, t, n) {
  let s = /* @__PURE__ */ dr(e, t);
  Sn(s) && (s = q({}, s, t));
  class o extends Rs {
    constructor(i) {
      super(s, i, n);
    }
  }
  return o.def = s, o;
}
const Jc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Rs extends Jc {
  constructor(t, n = {}, s = ds) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== ds ? this._root = this.shadowRoot : (process.env.NODE_ENV !== "production" && this.shadowRoot && be(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow(
      q({}, t.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Rs) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, tr(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(t) {
    for (const n of t)
      this._setAttr(n.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const t = (s, o = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: r, styles: i } = s;
      let l;
      if (r && !C(r))
        for (const f in r) {
          const d = r[f];
          (d === Number || d && d.type === Number) && (f in this._props && (this._props[f] = Ws(this._props[f])), (l || (l = /* @__PURE__ */ Object.create(null)))[ae(f)] = !0);
        }
      this._numberProps = l, this._resolveProps(s), this.shadowRoot ? this._applyStyles(i) : process.env.NODE_ENV !== "production" && i && be(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(s);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((s) => {
      s.configureApp = this._def.configureApp, t(this._def = s, !0);
    }) : t(this._def);
  }
  _mount(t) {
    process.env.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const s in n)
        R(this, s) ? process.env.NODE_ENV !== "production" && be(`Exposed property "${s}" already exists on custom element.`) : Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Xo(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = C(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && s.includes(o) && this._setProp(o, this[o]);
    for (const o of s.map(ae))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(r) {
          this._setProp(o, r, !0, !this._patching);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : wo;
    const o = ae(t);
    n && this._numberProps && this._numberProps[o] && (s = Ws(s)), this._setProp(o, s, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, s = !0, o = !1) {
    if (n !== this._props[t] && (this._dirty = !0, n === wo ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), s)) {
      const r = this._ob;
      r && (this._processMutations(r.takeRecords()), r.disconnect()), n === !0 ? this.setAttribute(ge(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(ge(t), n + "") : n || this.removeAttribute(ge(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), zc(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Ke(this._def, q(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0, process.env.NODE_ENV !== "production" && (s.ceReload = (r) => {
        this._styles && (this._styles.forEach((i) => this._root.removeChild(i)), this._styles.length = 0), this._applyStyles(r), this._instance = null, this._update();
      });
      const o = (r, i) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            Sn(i[0]) ? q({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      s.emit = (r, ...i) => {
        o(r, i), ge(r) !== r && o(ge(r), i);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const s = this._nonce;
    for (let o = t.length - 1; o >= 0; o--) {
      const r = document.createElement("style");
      if (s && r.setAttribute("nonce", s), r.textContent = t[o], this.shadowRoot.prepend(r), process.env.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let i = this._childStyles.get(n.__hmrId);
            i || this._childStyles.set(n.__hmrId, i = []), i.push(r);
          }
        } else
          (this._styles || (this._styles = [])).push(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const s = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[s] || (t[s] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = this._getSlots(), n = this._instance.type.__scopeId;
    for (let s = 0; s < t.length; s++) {
      const o = t[s], r = o.getAttribute("name") || "default", i = this._slots[r], l = o.parentNode;
      if (i)
        for (const f of i) {
          if (n && f.nodeType === 1) {
            const d = n + "-s", p = document.createTreeWalker(f, 1);
            f.setAttribute(d, "");
            let a;
            for (; a = p.nextNode(); )
              a.setAttribute(d, "");
          }
          l.insertBefore(f, o);
        }
      else
        for (; o.firstChild; ) l.insertBefore(o.firstChild, o);
      l.removeChild(o);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const t = [this];
    this._teleportTargets && t.push(...this._teleportTargets);
    const n = /* @__PURE__ */ new Set();
    for (const s of t) {
      const o = s.querySelectorAll("slot");
      for (let r = 0; r < o.length; r++)
        n.add(o[r]);
    }
    return Array.from(n);
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _beginPatch() {
    this._patching = !0, this._dirty = !1;
  }
  /**
   * @internal
   */
  _endPatch() {
    this._patching = !1, this._dirty && this._instance && this._update();
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
    if (process.env.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((s) => this._root.removeChild(s)), n.length = 0);
    }
  }
}
const Yc = /* @__PURE__ */ q({ patchProp: kc }, Sc);
let Vo;
function Kr() {
  return Vo || (Vo = sc(Yc));
}
const zc = ((...e) => {
  Kr().render(...e);
}), ds = ((...e) => {
  const t = Kr().createApp(...e);
  process.env.NODE_ENV !== "production" && (Zc(t), Qc(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = ef(s);
    if (!o) return;
    const r = t._component;
    !A(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, Xc(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
});
function Xc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Zc(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => ii(t) || li(t) || ci(t),
    writable: !1
  });
}
function Qc(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        be(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return be(s), n;
      },
      set() {
        be(s);
      }
    });
  }
}
function ef(e) {
  if (J(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && be(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && be(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function tf() {
  xc();
}
process.env.NODE_ENV !== "production" && tf();
const nf = { class: "measures-table" }, sf = /* @__PURE__ */ dr({
  __name: "MeasuresTable",
  props: {
    test: {},
    temperature: {},
    pressure: {}
  },
  setup(e) {
    return (t, n) => (an(), pn("div", nf, [
      n[1] || (n[1] = fe("h3", null, "Measures (Vue)", -1)),
      fe("table", null, [
        n[0] || (n[0] = fe("thead", null, [
          fe("tr", null, [
            fe("th", null, "Name"),
            fe("th", null, "Value"),
            fe("th", null, "Date")
          ])
        ], -1)),
        fe("tbody", null, [
          (an(!0), pn(_e, null, Dl(t.measures, (s) => (an(), pn("tr", {
            key: s.date + s.name
          }, [
            fe("td", null, Pt(s.name), 1),
            fe("td", null, Pt(s.value), 1),
            fe("td", null, Pt(s.date), 1)
          ]))), 128))
        ])
      ]),
      jr(" " + Pt(e.test) + "xx duyps ", 1)
    ]));
  }
}), of = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, kr = /* @__PURE__ */ of(sf, [["__scopeId", "data-v-4ec64557"]]), rf = {
  __name: "App",
  setup(e) {
    return (t, n) => (an(), pn(_e, null, [
      n[0] || (n[0] = fe("h1", null, "You did it!", -1)),
      Ke(kr)
    ], 64));
  }
};
ds(rf).mount("#app");
const lf = /* @__PURE__ */ Gc(kr);
customElements.define("vue-measures-table", lf);
console.log(1);
