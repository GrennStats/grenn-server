export interface HeroKeyObject<T> {
    backett: T;
    tripp: T;
    charnok: T;
    wu: T;
    vadasi: T;
    uncle_sven: T;
    hk_206: T;
    voden: T;
    tyto: T;
    pakko: T;
    aisling: T;
    zandora: T;
    xenobia: T;
    the_margrave: T;
    lord_knossos: T;
    oru: T;
}

export type HeroKey = keyof HeroKeyObject<any>;