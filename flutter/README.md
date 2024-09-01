# flutter_training

### 🛠 Flutter Prepare

> 1. Flutter SDK Download : https://docs.flutter.dev/get-started/install
> 2. System Environment Variables (path : ~\flutter\bin)
> 3. Android Studio(Windows) or Xocde(Mac) install
>      * Android Studio: https://developer.android.com/studio?utm_source=android-studio&hl=ko
>      * Plugin : “Flutter” and “Dart”
>      * Xcode : https://developer.apple.com/xcode/
> 4. terminal (cmd) Set-up → <b>flutter doctor</b> <br/>
>  - Andoird Studio Err <br/>
>    ⓐ [!] Android …. ⇒ “flutter doctor —android-licenses” <br/>
>    ⓑ If a problem occurs in the previous step(ⓐ). <br/>
>      &ensp;&ensp;&nbsp;[ERR] Android SDK Not found...<br/>
>      &ensp;&ensp;&nbsp;[SOL] Flutter config Android SDK : flutter config --android-sdk <path-to-sdk>
>  - Xcode Err
>    ⓐ [√] Xcode... ⇒ <b>CocoaPoads</b> <br/>
>       ① Not installed <br/>
>       <pre><code> brew install cocoapods </code></pre>
>       ② If the installation directory path is Err, execute in order. <br/>
>       <pre><code>sudo gem uninstall cocoapods</code></pre>
>       <pre><code> brew install cocoapods </code></pre>

### 🔍 Flutter Characteristic
1. Dart Language.
2. Differences from other languages
   1. Collection
      > <b> add() : Collection Add.</b> <br/>
      > <b> where() : Collection Filtering.</b> <br/>
      > <b> map() : Collection Change Values(All). </b> <br/>
      > <b> reduce() : Apply the entered function to the parameters in the Collection. </b> <br/>
      > <b> fold() : Same as reduce, returns any type. </b> <br/>
   2. OOP
      > <b> Mixin : You can select and add only the features you want to a specific class.</b> <br/>
      > 🚀Useage
      > Mixin Class :
      > <pre><code>mixin {Class Name} on {Top Class Name})</code></pre>
      > Top Class :
      > <pre><code>class {Top Class Name} with {name}</code></pre>
      > <b>Casecade : In-instance properties or member functions can be called continuously.</b>
      > <pre><code>User user = User(’name’,1) <br/> 
      >          ..Info();</code></pre>
   3. Synchronous / Asynchronous
      > <b> Future : Generic declaration of future value to be received. Used only once. </b> <br/>
      > <b> Stream : Used when receiving continuously.</b> <br/>
