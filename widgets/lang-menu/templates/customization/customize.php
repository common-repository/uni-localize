<uni-router></uni-router>

<uni-store-set
 type="local"
 mode="init"
 path="loc.active"
 state='{"lang": "en", "flag": "gb", "name": "English", "translation": "https://uni.github.io/loc/english.json"}'
></uni-store-set>

<uni-lang-menu only>
    <uni-menu>
        <uni-button pro>
            <uni-button-icon only>
                <uni-event-store-get type="local" path="loc.active.flag" prop="name">
                    <uni-flag round></uni-flag>
                </uni-event-store-get>
            </uni-button-icon>

            <uni-button-label class="uni-space">
                <uni-event-store-get type="local" path="loc.active.name" prop="value">
                    <uni-render text></uni-render>
                </uni-event-store-get>
            </uni-button-label>

            <uni-drop-down></uni-drop-down>
        </uni-button>

        <uni-menu-surface>
            <uni-list-wrap pro>
                <ul>
                    <uni-load-repeat strict url="https://uni.github.io/loc/lang-menu.json">
                        <template>
                            <uni-router-link params="lang=(( lang ))">
                                <uni-event-store-get type="local" path="loc.active.lang" equal="(( lang ))" prop="selected">
                                    <uni-list-item>
                                        <uni-list-item-graphic only>
                                            <uni-modify state="(( flag ))" action="unbind" prop="name">
                                                <uni-flag round></uni-flag>
                                            </uni-modify>
                                        </uni-list-item-graphic>

                                        <uni-list-item-text class="uni-space">
                                            (( name ))
                                        </uni-list-item-text>
                                    </uni-list-item>
                                </uni-event-store-get>
                            </uni-router-link>

                            <uni-route params="lang=(( lang ))" prop="activate">
                                <uni-store-set inactive type="local" path="loc.active" state="(( uniself ))">
                                </uni-store-set>
                            </uni-route>
                        </template>
                    </uni-load-repeat>
                </ul>
            </uni-list-wrap>
        </uni-menu-surface>
    </uni-menu>
</uni-lang-menu>

<uni-event-store-get type="local" path="loc.active.translation" prop="url">
    <uni-load-store multi mode="set" path="loc.translate">
	</uni-load-store>
</uni-event-store-get>

<uni-license ui-dev-kit="" material-design-kit=""></uni-license>
