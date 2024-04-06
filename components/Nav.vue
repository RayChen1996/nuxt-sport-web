<template>
  <div>
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabIndex="{0}" role="button" class="btn btn-ghost lg:hidden">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> -->
          </div>
          <ul
            tabIndex="{0}"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>首頁</a></li>
            <li>
              <a>Parent</a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a class="btn btn-ghost text-xl">
          <img src="/logo.png" />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a href="/">最新活動</a></li>
          <li><a href="/profile">活動心得分享</a></li>
          <li><a>運動賽事</a></li>
          <li>
            <details>
              <summary>我的運動</summary>
              <ul class="p-2 w-64">
                <li><a>每月進度提醒</a></li>
                <li><a>設定當月目標</a></li>
                <li><a>分享訓練成果</a></li>
                <li><a>運動行事曆</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div class="navbar-end flex gap-2">
        <NuxtLink to="/">
          <button class="btn btn-primary">登入</button>
        </NuxtLink>

        <NuxtLink to="/">
          <button class="btn btn-outline">註冊</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
