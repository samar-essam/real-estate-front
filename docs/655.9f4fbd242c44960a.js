"use strict";(self.webpackChunkfinal=self.webpackChunkfinal||[]).push([[655],{2655:(w,f,e)=>{e.r(f),e.d(f,{LoginModule:()=>r});var l=e(433),p=e(7599),v=e(529),o=e(1571),F=e(9796),y=e(9140),c=e(6895);function C(i,n){1&i&&(o.TgZ(0,"p",9),o._uU(1," Email is required "),o.qZA())}function b(i,n){1&i&&(o.TgZ(0,"p",9),o._uU(1," Password is required "),o.qZA())}const h=function(i){return{"is-invalid":i}};class u{constructor(n,t,s,m){this.jwt=n,this.fb=t,this.router=s,this.toaster=m,this.loginForm=this.fb.group({email:["",l.kI.required],password:["",l.kI.required]})}onSubmit(){if(this.loginForm.invalid)return this.loginForm.markAllAsTouched(),void console.log("invalid");this.login()}login(){this.jwt.login(this.loginForm.value.email,this.loginForm.value.password).subscribe({next:n=>{this.checkRole(n)},error:n=>{console.log(n),this.toaster.toast(n instanceof v.UA?{type:"error",msg:n.error.message}:{type:"error",msg:n})}})}checkRole(n){this.jwt.checkUserRole(n.data.role).subscribe(t=>{"Admin"==t.payload?.data?.title?(this.jwt.patchRoleValue(t.payload?.data?.title),this.router.navigate(["admin-panel"])):this.router.navigate(["/"])})}}u.\u0275fac=function(n){return new(n||u)(o.Y36(F.T),o.Y36(l.qu),o.Y36(p.F0),o.Y36(y.M))},u.\u0275cmp=o.Xpm({type:u,selectors:[["app-login"]],decls:15,vars:9,consts:[[1,"container"],[3,"formGroup","ngSubmit"],[1,"form-group","mb-3"],["for","email",1,"label"],["type","email","id","email","formControlName","email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","password",1,"label"],["type","password","id","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"btn","btn-primary"],[1,"invalid-feedback"]],template:function(n,t){if(1&n&&(o.TgZ(0,"div",0)(1,"form",1),o.NdJ("ngSubmit",function(){return t.onSubmit()}),o.TgZ(2,"div",2)(3,"label",3),o._uU(4,"Email"),o.qZA(),o._UZ(5,"input",4),o.YNc(6,C,2,0,"p",5),o.qZA(),o.TgZ(7,"div",2)(8,"label",6),o._uU(9,"Password"),o.qZA(),o._UZ(10,"input",7),o.YNc(11,b,2,0,"p",5),o.qZA(),o.TgZ(12,"div")(13,"button",8),o._uU(14,"Login"),o.qZA()()()()),2&n){let s,m,g,d;o.xp6(1),o.Q6J("formGroup",t.loginForm),o.xp6(4),o.Q6J("ngClass",o.VKq(5,h,(null==(s=t.loginForm.get("email"))?null:s.invalid)&&(null==(s=t.loginForm.get("email"))?null:s.touched))),o.xp6(1),o.Q6J("ngIf",(null==(m=t.loginForm.get("email"))?null:m.invalid)&&(null==(m=t.loginForm.get("email"))?null:m.touched)),o.xp6(4),o.Q6J("ngClass",o.VKq(7,h,(null==(g=t.loginForm.get("password"))?null:g.invalid)&&(null==(g=t.loginForm.get("password"))?null:g.touched))),o.xp6(1),o.Q6J("ngIf",(null==(d=t.loginForm.get("password"))?null:d.invalid)&&(null==(d=t.loginForm.get("password"))?null:d.touched))}},dependencies:[c.mk,c.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u],styles:[".container[_ngcontent-%COMP%]{height:100vh;display:flex;justify-content:center;align-items:center}"]});const Z=[{path:"",component:u}];class a{}a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[p.Bz.forChild(Z),l.u5,l.UX,p.Bz]});class r{}r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[a,c.ez,l.UX]})}}]);